import express from 'express';
import WebTorrent from 'webtorrent';

const app = express();
const cors = require('cors')

const port = 4000;
app.get('/',cors(), (req, res) => {
  res.send({ thing : "hello world"});
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
