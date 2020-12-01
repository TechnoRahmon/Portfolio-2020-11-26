import React ,{useContext , useState, useEffect } from 'react';
import ProjectContext from '../../context/project/projectContext';
import {Link , useHistory } from 'react-router-dom';



const AddProjectForm = () => {

    const history = useHistory()
    const { addProject ,error , isLoading , addSuccess} = useContext(ProjectContext)
    const [err, setErr] = useState(error)
    const [newProj , setNewProj ] = useState({})

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


    //On change function
    const _handelOnChange=(e)=>{
        console.log(e.target.name);
    }



    // submission function
    const _handelsubmit = (e)=>{
         e.preventDefault()

         const newProject = {
            name:'name2442',
            url:'wwwfdsfds',
            source_code:'gitub.com',
            img_path : "test.png",
            description:'test 3 herefdsfsdfdskfsdlkgjadlkhgkadhghgjvksyhgshdkbjgyt',
        }

        //add new project
        addProject(newProject)

        //clear the local error
        setErr('')
        //<Link to="/projects">got to projects</Link>
    }





    return (
        <div className="AddProjectFrom center">
            <h3>Add New Project </h3>
            
            {error?
            <div className="row">
                <div className="red lighten-2 white-text col s12 m4 offset-m4">
                    <p > {error}  </p>
                </div>
            </div>
            :null}
          
        <div className="row ">
            <form onSubmit={_handelsubmit} className="col s12 m6 offset-m3  addProjectForm">

                {/* Project Name */}
                <div className="input-field col s12 m6 offset-m3">
                    <input id="projectName" type="text" name="name" className="validate" onChange={_handelOnChange}/>
                    <label htmlFor="projectName">Project Name</label>
                </div>
                {/* Source Code Link */}
                <div className="input-field col s12 m6 offset-m3">
                    <input id="gitHubLink" type="url" name="url" className="validate"  onChange={_handelOnChange}/>
                    <label htmlFor="gitHubLink">Source Code Link</label>
                </div>
                {/* Website Demo */}
                <div className="input-field col s12 m6 offset-m3">
                    <input id="DemoUrl" type="url" name="source_code" className="validate"  onChange={_handelOnChange}/>
                    <label htmlFor="DemoUrl">Website Demo Url</label>
                </div>

                {/* upload */}
                <div className="file-field input-field col s12 m6 offset-m3">
                    <div className="btn indigo accent-4 waves-effect waves-light">
                        <span>File</span>
                        <input type="file" name="img_path"  onChange={_handelOnChange}/>
                     </div>  
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="Project Image" />
                    </div>
                </div> 
                 
                {/* description */}
                    <div className="input-field col s12 m6 offset-m3">
                        <textarea id="description" name="description" className="materialize-textarea validate" data-length="120"  onChange={_handelOnChange}></textarea>
                        <label htmlFor="description" id="desLabel">Textarea</label>
                    </div>
                {/* Button */}
                <div className="col s12 m6 offset-m3">
                    <button className="btn indigo accent-4 waves-effect waves-light">send</button>
                </div>
            </form>
        </div>
       
            
            
        </div>
    );
}

export default AddProjectForm;
