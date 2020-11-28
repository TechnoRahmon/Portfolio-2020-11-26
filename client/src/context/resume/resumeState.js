import {useReducer} from 'react';
import axios from 'axios';
import ResumeContext from './resumeContext';
import resumeReducer from './resumeReducer';

import {    
    GET_RESUME,
    ADD_RESUME,
    GET_RESUME_DETAILS,
    DELETE_RESUME,
    ERROR_RESUME,
    DOWNLOAD_RESUME,
} from '../types';

const ResumeState = ({children})=>{


        const initState = {
            resumes : [],
            error :null, 
            
        }

        const [state, dispatch ] = useReducer(resumeReducer,initState)


        //get resume
        const getResume =async ()=>{
            try{
                const resume = await axios.get('/api/v2/resumes')
                    dispatch({ type :GET_RESUME, payload:resume.data.data })
            }   
            catch(err){
                dispatch({ type :ERROR_RESUME, payload:err.response.error })
            }
        }



    //add new resume
    const addResume =async (newResume)=>{
        try{
            const config={ headers:{accept :'application/json'},data:{}} 
            const resume = await axios.post('/api/v2/resumes',newResume,config)
                dispatch({ type :ADD_RESUME, payload:resume.data.data })
        }   
        catch(err){
            dispatch({ type :ERROR_RESUME, payload:err.response.error })
        }
    }



    //download resume
    const downloadResume =async (id)=>{
        try{
            
            const resume = await axios.get(`/api/v2/resume/:${id}/download`)
                dispatch({ type :DOWNLOAD_RESUME })
        }   
        catch(err){
            dispatch({ type :ERROR_RESUME, payload:err.response.error })
        }

    }

    //delete resume
    const deleteResume =async (id)=>{
        try{
            
            const resume = await axios.get(`/api/v2/resume/:${id}`)
                dispatch({ type :DELETE_RESUME ,payload: id })
        }   
        catch(err){
            dispatch({ type :ERROR_RESUME, payload:err.response.error })
        }

    }


    return(
        <ResumeContext.Provider value={{
            resumes : state.resumes,
            error : state.error,
        }}>

            {children}
        </ResumeContext.Provider>
    )
}