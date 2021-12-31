const express = require("express");
const app = express();
const port = 3001;
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

dotenv.config();

// mongoose.connect(process.env.DATABASE_ACCESS, () =>
//   console.log(`Database connected on ${port} : successfully`)
// );

mongoose
  .connect("mongodb://127.0.0.1:27017/contact", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database : successfully");
  })
  .catch(console.error);


const schemaUse = require("./models/ModelSchema");

app.get("/", async (req, res) => {
  const getData = await new schemaUse({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    subject: req.body.subject,
    email: req.body.email,
    message: req.body.message,
  });
  getData.save();
  res.json(getData);
});

app.post("/contact", (req, res) => {
  const getData = new schemaUse({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    subject: req.body.subject,
    email: req.body.email,
    message: req.body.message,
  });
  getData.save();
  res.json(getData);
});

app.listen(port, () => {
  console.log(`Server start on ${port} : succesfull`);
});
