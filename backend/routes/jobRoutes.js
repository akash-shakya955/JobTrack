import express from "express";


const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "All jobs"
    });
});



router.post("/", (req, res) => {

    console.log(req.body);

    res.json({
        message: "Job created",
        job: req.body
    });
    
});



export default router;