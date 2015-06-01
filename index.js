var
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 4000
router = require('./routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);


app.listen(port, function () {
    console.log("Sever started at port :", port);
});


