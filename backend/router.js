const Router = require('router')
const UserController = require('./controllers/user.controller');

const router = Router();

router.get('/test', UserController.index);
router.post('/user/create', UserController.createUser);
router.get('/user/index', UserController.getUsers);
router.post('/user/login', UserController.login);

module.exports = router;
