import express from "express";
import jobRoutes from "./routes/jobRoutes.js";
import connectDB from "./config/db.js";




const app = express();

connectDB();

app.use(express.json());


app.use("/api/jobs", jobRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Jobportal API",
        status: "success"
    })
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
    
});

