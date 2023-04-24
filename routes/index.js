import { getStatus, getStats } from '../controllers/AppController';

const express = require('express');

const router = express.Router();

router.use(express.json());
router.get('/status', getStatus);
router.get('/stats', getStats);

export default router;
