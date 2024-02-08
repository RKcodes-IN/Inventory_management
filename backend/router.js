const Router = require('router')
const UserController = require('./controllers/user.controller');

const router = Router();

router.get('/test', UserController.index);
router.post('/user/create', UserController.createUser);

module.exports = router;
