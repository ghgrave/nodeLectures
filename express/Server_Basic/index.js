const express = require("express");
const app = express();

/***********
TODO: use 'export PORT=5000' to temp change env variables
In windows, might need to us 'set PORT=5000' or...  '$env:PORT=5000'
****************/

// console.log(process);

app.get("/", (req, res) => {
  res.send("This is my root route");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}.`));
