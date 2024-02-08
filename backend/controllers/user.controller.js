const User = require('../models/user.model');

module.exports = {
    async index(req, res) {
        console.log("hello World")
    },


    async createUser(req, res) {

        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        var contact_no = req.body.contact_no;
        var status = req.body.status;

        console.log(name);
        const create = await User.create({
            name: name,
            email: email,
            password: password,
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


};