require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/contacts", contactRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));