const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const Auth = require('../models/auth.model');

const key = 'inventory_managementtoken';
function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}
module.exports = {
    async index(req, res) {
        console.log("hello World")
    },


    async createUser(req, res) {
        console.log("Request create User");
        console.log(req.body);
        console.log("Request create User");
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        var contact_no = req.body.contact_no;
        var status = req.body.status;
        var salt = await bcrypt.genSalt(10);
        var secSalt = await bcrypt.hash(password, salt);

        console.log(name);
        const create = await User.create({
            name: name,
            email: email,
            password: secSalt,
            contact_no: contact_no,
            status: status
        });

        try {
            if (create) {
                res.json({ 'status': 'OK', 'message': 'User Created', 'data': create });

            } else {
                res.json({ 'status': 'NOK', 'error': 'Something went wrong' });

            }
        } catch (error) {
            console.log(error);
        }

    },

    async login(req, res) {
        console.log("Request create User");
        console.log(req.body);
        console.log("Request create User");
        var email = req.body.email;
        var reqPassword = req.body.password;

        try {
            const user = await User.findOne({
                where: {
                    email: email
                }
            });

            if (!user) {
                res.json({ 'status': 'NOK', 'error': 'User not found' });
                return;
            }

            const passwordMatch = await bcrypt.compare(reqPassword, user.password);

            if (!passwordMatch) {
                res.json({ 'status': 'NOK', 'error': 'Invalid Credentials' });
                return;
            }

            const userData = {
                id: user.id
            };

            var generateToken = jwt.sign(userData, key);

            const chekAuth = await Auth.findOne({
                where: {
                    user_id: user.id
                }
            });

            if (!chekAuth) {
                const createAuth = await Auth.create({
                    user_id: user.id,
                    auth_key: generateToken
                });
                res.json({ 'status': 'OK', 'details': 'Logged in successfully', 'data': user, 'auth_token': createAuth.auth_key });
            } else {
                await Auth.update({ auth_key: generateToken }, {
                    where: {
                        user_id: user.id
                    }
                });
                const updatedAuth = await Auth.findOne({
                    where: {
                        user_id: user.id
                    }
                });
                res.json({ 'status': 'OK', 'details': 'Logged in successfully', 'data': user, 'auth_token': updatedAuth.auth_key });
            }
        } catch (error) {
            console.error("Error during login:", error);
            res.json({ 'status': 'NOK', 'error': 'Internal Server Error' });
        }
    },

    async getUsers(req, res) {
        try {
            const allUsers = await User.findAll({
                where: {
                    status: "1"
                },
            });

            if (allUsers.length > 0) {
                res.json({ 'status': 'OK', 'data': allUsers });
            } else {
                res.json({ 'status': 'NOK', 'error': 'No users found' });
            }
        } catch (error) {
            console.log(error);
            res.json({ 'status': 'NOK', 'error ': 'Something went wrong' + error });
        }
    }



};