var express = require("express");
var app = express();
var bodyParser = require('body-parser');


var messages = [
    {
        owner: 'Tim',
        text: 'some text'

    },
    {
        owner: 'Olli',
        text: 'other text'

    }
];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();

api.get("/messages", (req, res) => {
    res.json(messages);
})

api.get("/messages/:user", (req, res) => {
    let user = req.params.user;
    let result = messages.filter(message => message.owner == user);
    res.json(result);
})


api.post("/message", (req, res) => {
    console.log(req.body);
    messages.push(req.body);
    res.json(req.body);
    //    res.sendStatus(200);
})

app.use('/api', api);

app.listen(1234);
