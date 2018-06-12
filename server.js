var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var session = require('express-session')

app.use(session({
    secret: "fuck-flask",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge : 60000}
}))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/static'))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(request, response){

    request.session.counter += 1
    console.log(request.session.counter)
    response.render('index', {menu: request.session.counter})
})


app.listen(8001, function(){
    console.log("listening on port 8001")
})
