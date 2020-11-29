import React,{useState , useEffect } from 'react';

const ProjectDetails = (props) => {

    const [id , setId]= useState(''); 

    useEffect(()=>{
            
            setId(props.match.params.id)
            // view(id)
    },[id])


    return (
        <div>
            {/* current project data here*/}
            ProjectDetails
            <h1>{id?id:null}</h1>
        </div>
    );
}

export default ProjectDetails;
