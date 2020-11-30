import React,{ useState , useEffect , useContext} from 'react';
import ResumeContext from '../../context/resume/resumeContext';
import {useHistory } from 'react-router-dom';
import PdfAllPages from '../layout/Pdf_All_Pages';
import '../../css/styleV2.css';
const Resume = () => {

    const [err, setErr] = useState('');
    const [selectedFile, setFile] = useState([]);
    const [singleResume , setResume ] = useState(null)
    const { error , resumes , dataLoadingError, addResume , getResume , deleteResume} = useContext(ResumeContext);


    useEffect(()=>{
        if(error) setErr(error)
        //get resume data
        getResume()
    },[error])


    useEffect(()=>{
        if(resumes)setResume(resumes[0])
    },[resumes])


     


            /** Events  **/
    const _handelOnChange=(e)=>{
        setFile([e.target.files[0]])
        setErr('')
    }


    const _handelSubmit=(e)=>{
            e.preventDefault();
            if (selectedFile.length){
                var form_data = new FormData()
                form_data.append('myfile',selectedFile[0])
                addResume(form_data)
                window.location.reload(false)
            }else{
                setErr('Please choose a PDF file here ')
            }

            // <a href="http://localhost:5000/api/v2/resume/5fc1715b7004ee1e24ddf05a/download">download</a>

    }

    return (
        <div className="container  Resume">
            
            <div className="row ">
                    <h2>MY RESUME</h2>
            </div>
            <div className="row ">
                {/* Resumes PDF File */}
                    {singleResume?(
                        <div className="col m10 left pdf-warper" key={singleResume._id}>
       
                            <PdfAllPages pdf={`/uploads/${singleResume.name}`} />
                        </div>
            
                    ):(<div className="col s12 m10 center red lighten-2 white-text "><p>{dataLoadingError|| 'THERE IS NO DATA'}</p></div>)}
                

                {/* upload form  */}
                <div className="col s12 m2 right"> 

                    <p>{err?err:null}</p>

                    <form onSubmit={_handelSubmit} autoComplete="off" encType="multipart/form-data" id="resume-form">

                        
                            <input type="file" id="myfile" onChange={_handelOnChange}/>
                      
                    

                        
                            <button>upload</button>
                      
                    </form>
                {singleResume?(
                <span className="resume-btn-box">
                    <a href={`http://localhost:5000/api/v2/resume/${singleResume._id}/download`} className="btn-large waves-effect waves-light ">
                        <i className="material-icons">download</i>
                    </a>
                    <button className="btn-large waves-effect waves-light " onClick={()=>{deleteResume(singleResume._id); window.location.reload(false);}}>
                        <i className="material-icons">delete</i>
                    </button> 
                </span>
                ):null}

                </div>
            
            </div> 
        </div>
    );
}

export default Resume;







//  >>>>> Display multi files

//  <div className="col s12 m5">
//     <h2>{singleResume.name}</h2>
//     {singleResume.path}
// </div>

// <div className="col s12 m5">
// <button onClick={()=>{deleteResume(singleResume._id)}}><i className="material-icons">delete</i></button>
// </div> 