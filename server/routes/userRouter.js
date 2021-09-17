const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registrateUser);
router.post('/login', userController.getUser);
router.get('/auth', authMiddleware, userController.checkUser);

module.exports = router;
