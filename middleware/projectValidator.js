const {check,validatorresult } = require('express-validator');
const { async } = require('q');
// const Project1 = require("../Models/projectModel");
 const checkV = [
  check("name").notEmpty().withMessage("project name can not be empty"),
  check("url").notEmpty().withMessage("url can not be empty"),
  check("img_path").notEmpty().withMessage("image path can not be empty"),
  check("description")
    .notEmpty()
    .withMessage("description can not be empty"),
];



module.exports = { checkV };