const mysql = require('mysql')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const ServerPortRouter = require('./routes/ServerPortRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/serverport', ServerPortRouter);

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`)

  // connection.query('SELECT * FROM ParticipantInfo', function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
});

