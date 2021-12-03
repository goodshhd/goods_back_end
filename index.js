
// //password-user-MDB: robo121208
const express = require('express');
const testApi = require('./routes/auth.routes');
const bodyParser = require('body-parser');
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
const cors = require('cors');
const moment = require('moment');

require('dotenv').config();
//app
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});

const database = [
    {
        id: 10,
        date: moment().format("MMM Do YY"),
        code: 'VB720',
        status: 'Form server',
        company: 'ART-UA',
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        id: 11,
        date: moment().format("MMM Do YY"),
        code: 'VB720',
        status: 'Form server',
        company: 'ART-UA',
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
];

app.use('/api', testApi);

 app.post('/api', (req, res) => {
     if(req.body === undefined) {
         console.warn('body is undefined')
     } else {
         const data = req.body;
         database.push(data);
         console.log(database);
     }
 })

app.get('/table-data', (req, res) => {
    res.send(database)
})



