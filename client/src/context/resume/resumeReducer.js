import {    
    GET_RESUMES,
    ADD_RESUME,
    GET_RESUME_DETAILS,
    DELETE_RESUME,
    ERROR_RESUME,
    DOWNLOAD_RESUME,
} from '../types';


export const resumeReducer = (state , action)=>{

        switch(action.payload){

            case GET_RESUMES:
                return{ ...state, 
                        resumes :action.payload, 
                        success : action.success }
                


            case ADD_RESUME:
                return{ ...state, 
                        resumes :[...state.resumes , action.payload], 
                        success : action.success }


            case DELETE_RESUME:
                const newResumes = state.resumes.filter(item=> item._id !== action.payload )
                return{ ...state, 
                        resumes :newResumes, 
                        success : action.success } 


            case DOWNLOAD_RESUME:
                break; 


            case ERROR_RESUME:
                return{ ...state, 
                    error:action.payload, 
                    success : action.success }


            default:{
                return state
                }
        }
    
}