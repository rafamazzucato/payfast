var port = process.env.PORT || 3000;
var host = process.env.HOST_NAME || 'localhost';
var env = process.env.NODE_ENV || 'dev';

var app = require('./config/custom-express')();

app.listen(port,host,function(){
    console.log('servidor rodando em '+ host+ ":" + port + " env:" + env);
});

