import express from 'express'
import UserRoutes from './users/UserRoutes'

const router = express.Router();

router.use('/users', UserRoutes);

export default router