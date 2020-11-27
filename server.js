const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 5000;
/** IMPORTING FILES **/
const projectsRoutes = require('./Routes/projectsRoutes')
const resumesRoutes = require('./Routes/resumesRoutes')

//link the config.env
dotenv.config({ path: './Config/config.env'})
// import connectDB function 
const { connectDB }= require('./Config/db')
connectDB()
//link morgan 
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(express.json())


/************************ Api Routes ***************/
//  /api/v1 for project routes 
app.use('/api/v1', projectsRoutes)
//  /api/v2 for resume routes 
app.use('/api/v2', resumesRoutes)
/***************************************/


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode at port: ${PORT}`.yellow.bold))