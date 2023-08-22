require("dotenv").config();
const express = require("express");
const app = express();
require("./DB/connection");
const cors = require("cors");
const router = require("./Routes/route")
const path = require('path')
app.use(cors());
app.use(express.json());
app.use(router);

const _dirname = path.dirname("")

const buildPath = path.join(_dirname , "../frontend/build");

app.use(express.static(buildPath))

app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})


app.listen(5000, () => {
  console.log("server is running at port 5000");
});
