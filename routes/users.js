const express=require('express');
const { route } = require('.');
const { home } = require('../controllers/home_controller');
const router= express.Router();

const usersController = require('../controllers/users_controllers');

router.get('/profile', usersController.profile);


module.exports=router;