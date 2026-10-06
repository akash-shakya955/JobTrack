import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({

    company: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true
    },

    position: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true
    },

    location: {
        type: String,
        trim: true
    },

    status: {
        type: String,
        required: true,
        default: "Applied",
        enum: ["Applied", "Interview", "Selected", "Rejected"]
    },

    salary: {
        type: String,
        trim: true
    },

    applicationDate: {
        type: Date,
        default: Date.now
    },

    interviewDate: {
        type: Date
    },

    notes: {
        type: String,
        trim: true
    }
});


const Job = mongoose.model("Job", jobSchema);

export default Job;