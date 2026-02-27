const express= require("express");
const mongoose = require("mongoose");
const cors =require("cors");
require("dotenv").config();
const mongodb = require("./connection/connection.js")
const todoRoutes = require("./routes/todoroutes.js");
const app= express();
const errorHandler = require("./middleware/errorMiddleware");
app.use(express.json());
app.use(errorHandler);
app.use(cors());
app.use("/api/todos",todoRoutes);

mongodb();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});