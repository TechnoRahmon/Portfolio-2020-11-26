const Router = require('express').Router()
const ResumeController = require('../controller/resumesController')
const { resumeValidate , upload }=require('../middleware/resumeMiddleware')

Router
    .route('/resumes')
        .get( ResumeController.getResumes)
        .post( upload.single('myfile') ,resumeValidate,ResumeController.AddResumes)
Router
    .route('/resume/:id/download')
        .get(ResumeController.downloadFile)

Router
    .route('/resume/:id')
        .get(ResumeController.deleteResume)

module.exports= Router