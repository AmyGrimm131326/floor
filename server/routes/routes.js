const express = require('express');

const UserController = require('../controllers/userController');
const MessageController = require('../controllers/messageController');

// this is how im grabbing the router method to use expresses built in router
const router = express.Router();

//order routes
router.get('/messages', MessageController.allMessages);
router.get('/messages/viewMessage/:id', MessageController.viewMessage);
router.put('/messages/complete/:id', MessageController.completeMessage);

//Admin page
router.post('/newMessage', MessageController.newMessage);
router.delete('/messages/delete/:id', MessageController.deleteMessage);

// admin routes
router.post('/admin/login', UserController.loginUser);

module.exports = router;