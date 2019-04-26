const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
const mysql = require('mysql')

ServerPortRouter.route('/add').post(function (req, res) {
    const participant = req.body;
    console.log(req.body);

    connection.query(`INSERT INTO ParticipantInfo (FirstName, LastName, Email, OriginalPhone, StrippedPhone, ZipCode) VALUES ('${participant.firstName}', '${participant.lastName}', '${participant.email}', '${participant.phone}', '${participant.phoneClean}', '${participant.zip}')`, function (err, result) {
        //on ER_DUP_ENTRY, say that there is already a participant with that email registered
        if (err) console.log(err.code);
     });
});

module.exports = ServerPortRouter;