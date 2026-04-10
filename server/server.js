require("dotenv").config();
const app = require("./src/app");

const connectDb = require("./src/db/db");
const taskModel = require("./src/models/task.model");

const PORT = process.env.PORT || 3000;
connectDb();

app.get("/tasks", async (req,res)=>{
try {
    const tasks = await taskModel.find();
    res.status(200).json({
        message : "tasks fetched successfully",
        tasks : tasks
    });
} catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
}
})

app.post("/tasks", async (req,res)=>{
   try {
    const { title } = req.body;

  
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTask = await taskModel.create({ title });

    res.status(201).json({
        message : "task created successfully",
        task : newTask
    }); 
    
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
