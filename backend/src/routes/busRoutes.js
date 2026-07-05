const express = require('express');
const busController = require('../controllers/busController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', busController.getAllBuses);
router.get('/:id', busController.getBusById);

// Protected routes
router.post('/', authMiddleware, busController.createBus);
router.put('/:id', authMiddleware, busController.updateBus);
router.delete('/:id', authMiddleware, busController.deleteBus);

module.exports = router;
