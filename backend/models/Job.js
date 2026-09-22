import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({

    company: {
        type: String,
        required: true
    },

    position: {
        type: String,
        required: true
    },

    location: {
        type: String
    },

    status: {
        type: String,
        required: true,
        default: "Applied",
        enum: ["Applied", "Interview", "Selected", "Rejected"]
    },

    salary: {
        type: String
    },

    applicationDate: {
        type: Date,
        default: Date.now
    },

    interviewDate: {
        type: Date
    },

    notes: {
        type: String
    }
});


const Job = mongoose.model("Job", jobSchema);

export default Job;