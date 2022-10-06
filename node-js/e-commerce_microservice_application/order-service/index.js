const express = require("express");
const app = express();
const mongoose = require("mongoose");
const amqp = require("amqplib");
const Product = require("./Product");
const isAuthenticated = require("../isAuthenticated");
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/order-service",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`order service DB  Connected`);
    // console.log(pro);
  }
);
async function connect() {
  const amqpServer = "amqp://localhost:5672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("ORDER");
}

connect();

app.listen(5002, () => {
  console.log(`product service is working at port 5002`);
});
