const Router = require('express').Router()
const ResumeController = require('../controller/resumesController')


Router
    .route('/resumes')
        .get( ResumeController.getResumes)
        

module.exports= Router