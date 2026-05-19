const express = require('express');
const router = express.Router();
const {
    getAllApplications,
    createApplication,
    updateApplicationStatus,
    deleteApplication
} = require('../controllers/applicationController');

// Routes
router.get('/', getAllApplications);
router.post('/', createApplication);
router.put('/:id/status', updateApplicationStatus);
router.delete('/:id', deleteApplication);

module.exports = router;
