import React ,{useContext , useState, useEffect } from 'react';
import ProjectContext from '../../context/project/projectContext';
import {Link , useHistory } from 'react-router-dom';



const AddProjectForm = () => {

    const history = useHistory()
    const { addProject ,error , isLoading , addSuccess} = useContext(ProjectContext)
    const [err, setErr] = useState(error)
    

    // check if there is any error in the projectState
    useEffect( ()=>{
        if(error) {setErr(error)
        }
        //redirect to projects page 
        if(addSuccess){history.push('/projects')}
    
    },[error ,addSuccess])


    //assigning the error from projectState to localState
    useEffect(()=>{
        
        setErr(error)
           // console.log(isLoading+' '+error);
    },[ err])


    // submission function
    const _handelsubmit = (e)=>{
    
        const newProject = {
            name:'name20',
            url:'www.test.com',
            source_code:'gitub.com',
            img_path : "test.png",
            description:"helle test 1",
        }

        //add new project
        addProject(newProject)

        //clear the local error
        setErr('')
        
    }
    return (
        <div>
            AddProjectForm
            <p>{err?err:null}</p>
            <button onClick={_handelsubmit}>send</button>
            <Link to="/projects">got to projects</Link>
        </div>
    );
}

export default AddProjectForm;
