const express = require("express");
const mongoose = require("mongoose");
const { createHandler } = require("graphql-http/lib/use/express");

const schema = require("./graphql/index.resolver");

const app = express();

mongoose.connect("mongodb://127.0.0.1/foodapp");
mongoose.connection.once("open", () => {
  console.log(`Connect to DB successfully`);
});

app.use("/graphql", createHandler({ schema, context: (req) => ({ req }) }));

app.get("/", (req, res) => {
  return res.json({ messgae: "Get / Message" });
});

app.listen(4005, () => {
  console.log(`Server is running on port 4005`);
});
