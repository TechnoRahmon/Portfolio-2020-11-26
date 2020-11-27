const Router = require('express').Router()



Router
    .route('/projects')
        .get((req,res,next)=>{
                res.send('hello to Projects')
        })

module.exports= Router