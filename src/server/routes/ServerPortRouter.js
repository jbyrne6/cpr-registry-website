const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
const mysql = require('mysql')
const env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];

const connection = mysql.createConnection({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database
})

let databaseResponse = ''
ServerPortRouter.route('/add').post(function (req, res) {
    const participant = req.body;
    let emailExistsResponse = null
    // console.log(req.body);
    let checkEmailQuery = `SELECT EXISTS(SELECT * from ParticipantInfo WHERE email='${participant.email}')`
    connection.query(checkEmailQuery, function (err, result, fields) {
      if (err) throw err;
      // the response to the email query
      emailExistsResponse = result[0][Object.keys(result[0])[0]]
      if (emailExistsResponse === 0) {
        console.log('the query is going through')
        
        connection.query(`INSERT INTO ParticipantInfo (FirstName, LastName, Email, OriginalPhone, StrippedPhone, ZipCode) VALUES ('${participant.firstName}', '${participant.lastName}', '${participant.email}', '${participant.phone}', '${participant.phoneClean}', '${participant.zip}')`, function (err, result) {
          //on ER_DUP_ENTRY, say that there is already a participant with that email registered
          if (err) databaseResponse = err.code
          databaseResponse = 'Success, you are now in the registry!'
          console.log(databaseResponse)
       });
      } else {
        databaseResponse = `${participant.email} is already in the database`
        console.log(databaseResponse)
      }
    })
});

ServerPortRouter.route('/dbResponse').get(function (req, res) {
  console.log(`the response being sent is: ${databaseResponse}`)
  res.send(databaseResponse);
});
module.exports = ServerPortRouter;