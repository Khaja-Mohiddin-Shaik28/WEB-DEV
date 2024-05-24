const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Pending, Completed } = require("./models/todo");

const dbURL =
  "mongodb+srv://test:1234@cluster.2ied0un.mongodb.net/todo-lists?retryWrites=true&w=majority&appName=Cluster";

mongoose
  .connect(dbURL)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err, "not connected"));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers display
app.get("/", (req, res) => {
  res.redirect("/todos");
});
app.get("/todos", (req, res) => {
  res.render("index");
});

app.get("/todos/create", (req, res) => {
  res.render("create");
});

// data posting from create to pending
app.post("/todos/pending", async (req, res) => {
  try {
    const todo = new Pending(req.body);
    const result = await todo.save();
    res.redirect("/todos");
  } catch (err) {
    console.log(err);
  }
});

// Pending and completed data display from database
app.get("/todos/:status", async (req, res) => {
  try {
    const status = req.params.status;
    if (status == "pending") {
      const result = await Pending.find().sort({ createdAt: -1 });
      res.render("pending", { todos: result });
    } else if (status == "completed") {
      const result = await Completed.find().sort({ createdAt: -1 });
      res.render("completed", { todos: result });
    }
  } catch (err) {
    console.log(err);
  }
});

// deleting data from pending and completed
app.delete("/todos/:status/:id", async (req, res) => {
  try {
    const status = req.params.status;
    const id = req.params.id;
    if (status == "pending") {
      let result = await Pending.findByIdAndDelete(id);
    } else if (status == "completed") {
      let result = await Completed.findByIdAndDelete(id);
    }
    res.json({ redirect: `/todos/${status}/` });
  } catch (err) {
    console.log(err);
  }
});

// Display update page with details
app.get("/todos/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (mongoose.Types.ObjectId.isValid(id)) {
      const todo = await Pending.findById(id);
      res.render("update", {
        todo: {
          title: todo.title,
          description: todo.description,
          id : todo._id
        },
      });
    } else {
      res.status(404).render("404");
    }
  } catch (err) {
    console.log(err);
  }
});

// Update values in pending
app.put("/todos/pending/:id", async (req,res)=>{
  try{
    const id = req.params.id;
    const data = req.body;
    await Pending.findByIdAndUpdate(id,data);
    res.json({redirect:"/todos/pending"});
  }
  catch(err){
    console.log(err);
  }
})

// posting data from pending to completed
app.post("/todos/completed/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Pending.findById(id);
    const todo = new Completed({
      title: data.title,
      description: data.description,
    });
    await todo.save();
    res.json({ redirect: `/todos/pending/${id}` });
  } catch (err) {
    console.log(err);
  }
});

app.use((req, res) => {
  res.status(404).render("404");
});
