const express = require('express')
const app = new express()
const path = require('node:path')
const { config, engine } = require('express-edge');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

app.use(express.static('public'))

app.use(engine);
app.set('views', `${__dirname}/views`);
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/node-blog', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err)) 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.post('/posts/store', (req, res) => {
    console.log(req.body)
    res.redirect('/')
});

app.get('/' , (req , res)=>{
    res.render('index');
})

app.get('/posts/new' , (req,res)=>{
    res.render('create')
})



app.get('/about' , (req , res)=>{
    res.sendFile(path.resolve(__dirname , 'pages/about.html'))
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.resolve(__dirname , 'pages/contact.html'))
})

app.get('/post' , (req ,res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})

app.listen(4000, ()=>{
    console.log('Ok App listening on port 4000')})
