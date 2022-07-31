const router = require('express').Router()
const Blog=require('../models/Blog')

router.get('/compose',(req,res)=>{
 
    res.render('composeBlog')
})

//*check for the missing fields!

.post('/compose',(req,res)=>{
    const{title,content}=req.body
    if(!title|| !content)
    return res.send('Please enter all the require creadiential')

    const newBlog= new Blog({title,content})

    //save the blog to the database
    newBlog.save()
    .then(()=>{
        console.log('Blog Saved Successfully!')
        res.redirect('/')
    })
    .catch((err)=>console.log(err))
})

module.exports=router