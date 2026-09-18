import express from "express";
import Job from "../models/Job.js";


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
    const job = await Job.findById(id);

    res.json({
        message: "Job found",
        job: job
    })
});



router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const job = await Job.findByIdAndUpdate(id, req.body, {new: true});

    res.json({
        message: "Job updated",
        job: job
    })

});



router.delete("/:id", async (req, res) => {
     const id = req.params.id;

     const job = await Job.findByIdAndDelete(id);

     res.json({
        message: "Job deleted",
        job: job
     })
});



router.post("/", async (req, res) => {

    const job = await Job.create(req.body);

    res.json({
        message: "Job created",
        job: job
    });
    
});



export default router;