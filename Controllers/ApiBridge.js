const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const jwtencrypt = require('jwt-token-encrypt');
const NodeSession = require('node-session');

app.use(bodyParser.json())

const session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});
    

app.route('/login').post(async (req,res) => {
    
    console.log(req.body)

    const encryption = {
        key: 'AAAAAAAAAAAAAA',
        algorithm: 'aes-256-cbc',
      };
      const publicData = {
        role: "user"
    };
      const jwtDetails = {
        secret: '1234567890', // to sign the token
        // Default values that will be automatically applied unless specified.
        // algorithm: 'HS256',
        // expiresIn: '12h',
        // notBefore: '0s',
        // Other optional values
        key: 'ThisIsMyAppISS',// is used as ISS but can be named iss too
    };
    const privateData = {
        email: req.body.username,
        bank: "Gringotts",
        password: req.body.password,
    };
    const token = await jwtencrypt.generateJWT(jwtDetails,publicData,encryption,privateData)

    session.startSession(req, res, function(){
        req.session.put('jwt',token);
        var test = req.session.getToken()

        var value = req.session.get('jwt')
        console.log(value)
        res.send(test)
    })
    
    
})

module.exports = app;