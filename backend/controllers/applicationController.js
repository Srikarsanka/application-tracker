const Application = require('../models/Application');

// Get all applications
const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find().sort({ createdAt: -1 });
        res.status(200).json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ error: 'Failed to fetch applications' });
    }
};

// Create a new application
const createApplication = async (req, res) => {
    const { company_name, role_name, apply_date, status, job_link, notes } = req.body;
    
    if (!company_name || !role_name || !apply_date) {
        return res.status(400).json({ error: 'Company Name, Role, and Apply Date are required.' });
    }

    try {
        const application = await Application.create({
            company_name,
            role_name,
            apply_date,
            status: status || 'Applied',
            job_link,
            notes
        });
        
        res.status(201).json({ 
            message: 'Application added successfully', 
            application
        });
    } catch (error) {
        console.error('Error creating application:', error);
        res.status(500).json({ error: 'Failed to create application' });
    }
};

// Update application status
const updateApplicationStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({ error: 'Status is required.' });
    }

    try {
        const application = await Application.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );
        
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        res.status(200).json({ message: 'Status updated successfully', application });
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).json({ error: 'Failed to update status' });
    }
};

// Delete application
const deleteApplication = async (req, res) => {
    const { id } = req.params;

    try {
        const application = await Application.findByIdAndDelete(id);
        
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        console.error('Error deleting application:', error);
        res.status(500).json({ error: 'Failed to delete application' });
    }
};

module.exports = {
    getAllApplications,
    createApplication,
    updateApplicationStatus,
    deleteApplication
};
