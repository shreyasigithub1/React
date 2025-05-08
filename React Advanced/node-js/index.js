const express = require("express");
const cors = require("cors"); // ✅ Step 1: Import CORS
const todoRoutes = require("./todoRoutes");

const server = express();

// ✅ Step 2: Enable CORS before routes
server.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Optional: Middleware to parse JSON
server.use(express.json());

server.use("/api/todos/", todoRoutes.router);

server.get("/", (req, res) => {
  res.send("Welcome to Utility api");
});

server.listen(4100, () => {
  console.log("Server is listening at 4100");
});
