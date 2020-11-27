const Router = require('express').Router()



Router
    .route('/resume')
        .get((req,res,next)=>{
                res.send('hello to Resumes')
        })
        

module.exports= Router