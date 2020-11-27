const Resume  = require('../Models/resumeModel')
const { validationResult } = require('express-validator')




//@des Get all Resuems
//@route Get api/v2/resumes
//@accesss Public
exports.getResumes  = async (req,res,next)=>{        

        try{
            const resumes = await Resume.find(); 
            if(!resumes.length) return res.status(404).json({ success:false , error:'There is no resumes to view'}); 
            return res.status(200).json({ 
                success:true,
                data: resumes
            })
        }
        catch(err){
                return res.status(500).json({ success:false , error:'Server Error'+err })
        }
}




//@des POST new resume
//@route POST api/v2/resumes
//@accesss Public
exports.AddResumes  = async (req,res,next)=>{        

    try{
        const resumes = await Resume.find(); 
        if(!resumes.length) return res.status(404).json({ success:false , error:'There is no resumes to view'}); 
        return res.status(200).json({ 
            success:true,
            data: resumes
        })
    }
    catch(err){
            return res.status(500).json({ success:false , error:'Server Error'+err })
    }
}