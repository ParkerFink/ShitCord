const express = require('express')
const app = express()


app.use(express.urlencoded({extended:true}))
app.set()

const port = 1900
const ip = '127.0.0.1'




app.get('/', function(req,res){
    res.render('login.ejs')
})

app.post('/', function(req,res){
    res.redirect('/messages')

    let name = req.body.name
    console.log(name)

})




app.get('/messages', function(req,res){
    res.render('home.ejs')
})


app.listen(port, ip, function(){
    console.log("Server Running...")
})




