import express from "express";
import Job from "../models/Job.js";
import mongoose from "mongoose";


const router = express.Router();


router.get("/", async (req, res) => {

    const jobs = await Job.find();
    res.json({
        message: "All jobs",
        jobs: jobs
    });
});



router.get("/:id", async (req, res) => {

    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            message: "Invalid job ID"
        });
    }

    const job = await Job.findById(id);

    if (!job) {
        return res.status(404).json({
            message: "Job not found"
        });
    }

    res.json({
        message: "Job found",
        job: job
    })
});



router.put("/:id", async (req, res) => {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            message: "Invalid job ID"
        });
    }

    const job = await Job.findByIdAndUpdate(id, req.body, { new: true });


    if (!job) {
        return res.status(404).json({
            message: "Job not found"
        });

    }

    res.json({
        message: "Job updated",
        job: job
    })

});



router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            message: "Invalid job ID"
        });

    }

    const job = await Job.findByIdAndDelete(id);

    if (!job) {
        return res.status(404).json({
            message: "Job not found"
        });

    }

    res.json({
        message: "Job deleted",
        job: job
    })
});



router.post("/", async (req, res) => {

    try {
        const job = await Job.create(req.body);

        res.json({
            message: "Job created",
            job: job
        });
    } catch (error) {
        return res.status(400).json({
            message: "Failed to create job",
            error: error.message
        })

    }

});



export default router;