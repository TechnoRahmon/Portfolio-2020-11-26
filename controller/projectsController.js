const { check, validationResult } = require("express-validator");
const Project = require("../Models/projectModel");


const isNameExist = async (projectName)=>{
   const  project = await Project.find({ name: projectName });
    if(project.length) {
        return  true
    }
    return  false;
}





//@des Get all Projects
exports.getProjects = async (req, res) => {
  try {
    Project.get((err,projects) => {
      return res.status(200).json({
        success: true,
        data: projects,
      });
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message
    });
  }
};

// @des Get one Project

exports.view = async (req, res) => {
  try {
    await Project.findById(req.params.project_id, (err, project) => {
      
      if(!project) {
        return res.status(404).json({
          success : false,
          error: "Project is not found"
        })
      }

     return res.status(200).json({
        success: true,
        project: project
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error: " + error.message,
    });
  }
};

// @des Post new Project

exports.new = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        error: errors.array(),
      });
    }
    
    const nameError = await isNameExist(req.body.name);
    if ( nameError){
        return res.status(401).json({
            success: false,
            error : "Name is already taken"
        })
    }    
    
    
    const project = new Project();
    project.name = req.body.name;
    project.url = req.body.url;
    project.source_code = req.body.source_code;
    project.img_path = req.body.img_path;
    project.description = req.body.description;

    await project.save();
    return res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(402).json({
        success: false,
        error: error
      });
    }
    res.status(500).json({
      success: false,
      err: error.message
    });
  }
};

// @des Delete new Project

exports.delete =  async function (req, res) {

    try {
      const project = await Project.findById(req.params.project_id) 
      if(!project) {

        return res.status(404).json({
          success: false,
          err : "prjocet is not exist"
        })

      }
      await Project.deleteOne({_id:project._id}, (err)=>{
            res.json({
            status: "sucess",
            message: "project deleted",
            });
        })
         
    } catch (error) {
        if (err) {
            res.json({
                err: err.message,
                message: "something worng!"
            });
            }
    }
}