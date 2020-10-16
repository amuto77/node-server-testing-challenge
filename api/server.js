const express = require("express");
const server = express();
const Route = require("../emperors/emperorsModel");
server.use(express.json());


server.get('/',(req,res)=>{
    res.status(200).json({data: "Running..."})
})

module.exports = server

server.get("/emperors", (req, res) => {
    Route.find()
      .then((resp) => {
        res.status(200).json({ Data: resp });
      })
      .catch((err) => {
        res.status(500).json({ Message: err.message });
      });
  });

  server.post("/emperors", (req, res) => {
    const newEm = req.body;
    Route.insert(newEm)
      .then((resp) => {
        res.status(201).json({ Data: resp });
      })
      .catch((err) => {
        res.status(500).json({ Message: err.message });
      });
  });

  server.delete("/emperors/:id", (req, res) => {
    const id = req.params.id;
    Routes.remove(id)
      .then((resp) => {
        res.status(201).json({ Data: resp });
      })
      .catch((err) => {
        res.status(500).json({ Message: err.message });
      });
  });
  
  module.exports = server;

