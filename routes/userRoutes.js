const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

//add after userController
const authController = require('./../controllers/authController');

//add before router.route('/')
router.post('/signup', authController.signup);
router.post('/login', authController.login);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
