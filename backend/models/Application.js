const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema(
    {
        company_name: {
            type: String,
            required: [true, 'Please add a company name'],
        },
        role_name: {
            type: String,
            required: [true, 'Please add a role name'],
        },
        apply_date: {
            type: Date,
            required: [true, 'Please add an apply date'],
        },
        status: {
            type: String,
            enum: ['Applied', 'OA Scheduled', 'Interview', 'Selected', 'Rejected'],
            default: 'Applied',
        },
        job_link: {
            type: String,
            default: '',
        },
        notes: {
            type: String,
            default: '',
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Application', applicationSchema);
