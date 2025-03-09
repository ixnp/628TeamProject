import express, { application } from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import axios from "axios";

const router = express.Router();

// This section will help you get a list of all the tasks.
router.get("/", async (req, res) => {
  let collection = await db.collection("tasks");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single task by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("tasks");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new task.
router.post("/", async (req, res) => {
  let newDocument = {
    description: req.body.description,
    dueDate: req.body.dueDate,
    dueTime: req.body.dueTime,
    priority: req.body.priority,
    taskName: req.body.taskName,
    taskType: req.body.taskType,
  };
  let collection = await db.collection("tasks");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a task by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      description: req.body.description,
      dueDate: req.body.dueDate,
      dueTime: req.body.dueTime,
      priority: req.body.priority,
      taskName: req.body.taskName,
      taskType: req.body.taskType,
    },
  };

  let collection = await db.collection("tasks");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// This section will help you delete a task
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("tasks");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

//ollama
//Citations: Samchung. (n.d.-a). cs628-examples/Module 01/backend/index.js at main · samchung0117/cs628-examples. GitHub. https://github.com/samchung0117/cs628-examples/blob/main/Module%2001/backend/index.js
router.post("/api/chat", async (req, res) => {
  console.log("ollama");
  const userMessage = req.body.content || "Please provide a message.";

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();
  try {
    const axiosResponse = await axios({
      method: "post",
      url: "http://localhost:11434/api/generate",
      data: {
        model: "gemma2:2b",
        prompt: userMessage,
      },
      responseType: "stream",
    });

    axiosResponse.data.on("data", (chunk) => {
      const chunkStr = chunk.toString();
      res.write(`data: ${chunkStr}\n\n`);
    });

    axiosResponse.data.on("end", () => {
      res.write("data: [DONE]\n\n");
      res.end();
    });
  } catch (error) {
    console.error("Error during char response streaming:", error);
    res
      .status(500)
      .json({ error: "Failed to process request with Gemma 2:2b" });
  }
});

export default router;
