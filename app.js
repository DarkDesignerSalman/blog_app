const express= require('express')
const app=express()
port=3000

//!connect to the mongodb database
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/blog_tut',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
()=>{
    console.log('connection to mongodb database ')
})

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs')

//routes
app.use(require('./routes/index'))
app.use(require('./routes/compose'))
app.use(require('./routes/blog'))

//server configuration are here...
app.listen(port,()=>{
console.log('Server is running ')
})