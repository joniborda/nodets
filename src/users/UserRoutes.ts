import express from 'express'
import MongoUserRepository from './MongoUserRepository';
import UserController from './UserController'

const router = express.Router();
const userController = new UserController(new MongoUserRepository())


router.get('/', userController.getUsers.bind(userController));

export default router;