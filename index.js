const express = require("express");
var server = express();

server.use("/",express.static("webapp/"));

// server.get("/",(req,res)=> {
//         res.send("Hello welcome to Fiori on cloud kapil karwa.");
// });
port = process.env.PORT || 3000;
console.log("Server is running http://localhost:"+port);

// port = process.env.port;

server.listen(port);