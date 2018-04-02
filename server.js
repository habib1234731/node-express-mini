const express = require('express');
const db = require('./data/db.js');

const server = express();

server.get('/', function(req,res) {
    res.json({api: 'Running...'});
})

server.get('/api/users', (req, res)=>{
    ///get the data
    db
    .find()
    .then(users => {
        //send it to the browser
        res.json(users);
        //or res.send(users) to send it to the browser
    }).catch(error => {
        //handle it
        res.status(500).json(error);
    });
    //send the data
    // send the error if there is one
});

server.get('/api/users/:id', (req, res)=>{
    const id = req.params.id;//or const { id } = req.params;

    ///get the data
    db
    .findById(id)
    .then(users => {
        //send it to the browser
        res.json(users[0]);
        //or res.send(users) to send it to the browser
    }).catch(error => {
        //handle it
        res.status(404).json(error);
    });
    //send the data
    // send the error if there is one
});

const port = 5000;
server.listen(port, () => console.log('Api running on port 5000'));