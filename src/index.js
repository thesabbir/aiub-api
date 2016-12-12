var
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors');
    port = process.env.PORT || 4000
router = require('./routes');

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);

app.listen(port, function () {
    console.log("Sever started at port :", port);
});


