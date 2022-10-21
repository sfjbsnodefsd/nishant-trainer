const express = require("express");
const app = express();
const amqp = require("amqplib");
var channel, connection;

function connect() {
  try {
    const amqpServer = "http://localhost:5672";
    connection = amqp.connect(amqpServer);
    channel = connection.createChannel();
    channel.assertQueue("Rabbit");
  } catch (err) {
    console.log(err);
  }
}

connect();

app.get("/send", (req, res) => {});

app.listen(5000, () => {
  console.log("server is running at port 5000");
});
