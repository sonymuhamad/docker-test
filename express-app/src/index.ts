import express from "express";
import bodyParser from "body-parser";

const http = require('http');

const app = express()

const users = [
    {
        id:5,
        name:"sony",
        age:99
    },
    {
        id:10,
        name:"muhamad",
        age:100
    },
    {
        id:15,
        name:"fadhil",
        age:990
    }
]

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/users",(req,res)=>{
    res.send(users)
})

// Create server
const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Running Express server on port ${PORT}`);
});


// Graceful shutdown
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

function shutdown() {
  console.log('Shutting down gracefully...');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });

  // Force shutdown if not closed in 10s
  setTimeout(() => {
    console.error('Forcing shutdown.');
    process.exit(1);
  }, 10000);
}