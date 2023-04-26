import { getStatus, getStats } from '../controllers/AppController';
import postNew from '../controllers/UsersController';
import { getConnect, getDisconnect, getMe } from '../controllers/AuthController';

const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/status', getStatus);
router.get('/stats', getStats);
router.post('/users', postNew);
router.get('/connect', getConnect);
router.get('/disconnect', getDisconnect);
router.get('/users/me', getMe);

export default router;
