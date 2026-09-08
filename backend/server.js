import express from "express";




const app = express();


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Jobportal API",
        status: "success"
    })
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
    
});

