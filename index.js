const express = require("express"); // es6
const { Server } = require("socket.io");
const http = require('http');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    credentials: true
  }));
// nodemon // restart the server when server detect the changes
const port = "3000";
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: "*",//"http://localhost:3001",
      methods: ["GET", "POST"],
    },
  });

app.get('/',(_, res)=>{
   res.json({
    status:  200,
    message: `your server is healthy and running on ${port}`
   })
})

// io connect handling 
io.on("connection", ()=>{
    console.log("hi there you are connect with socket")

    socket.on("disconnect", () => {
        console.log("User disconnected:");
      });
})

try {
  app.listen(port, () => {
    console.log(`your server started on ${port}`);
  });
} catch (error) {
  console.log(`some error occured with ${error}`);
}
