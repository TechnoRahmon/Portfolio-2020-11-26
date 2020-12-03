import React,{ useState , useEffect , useContext} from 'react';
import ResumeContext from '../../context/resume/resumeContext';
import {useHistory } from 'react-router-dom';
import PdfAllPages from '../layout/Pdf_All_Pages';
import '../../css/styleV2.css';
import Spinner from '../layout/Spinner';


const Resume = () => {

    const [err, setErr] = useState('');
    const [selectedFile, setFile] = useState([]);
    const [singleResume , setResume ] = useState(null)
    const { error , resumes , dataLoadingError, addResume , getResume , deleteResume, addSuccess,showSpinner} = useContext(ResumeContext);


    useEffect(()=>{
        if(error) setErr(error)
        
        //get resume data
        //StartshowSpinner()
        getResume()
    },[error,])


    useEffect(()=>{
        if(resumes)setResume(resumes[0])
if(addSuccess) window.location.reload(false);
    },[resumes,addSuccess])


     
console.log('addSUc : ', addSuccess);

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
                
            }else{
                setErr('Please choose a PDF file here ')
            }

            // <a href="http://localhost:5000/api/v2/resume/5fc1715b7004ee1e24ddf05a/download">download</a>

    }

    return (
        <div className="container  Resume">
            
            <div className="row ">
                    <h2 className="center">MY RESUME</h2>
            </div>



            <div className="resume-btn-box-row row">
            {/* delete and download Button */}
            {singleResume?(
                <span className="resume-btn-box col s12">
                    <a href={`http://localhost:5000/api/v2/resume/${singleResume._id}/download`} className="btn waves-effect waves-light indigo accent-4">
                        <i className="material-icons">download</i>
                    </a>
                    <button className="btn waves-effect waves-light indigo accent-4 " onClick={()=>{deleteResume(singleResume._id); window.location.reload(false);}}>
                        <i className="material-icons">delete</i>
                    </button> 
                </span>
                ):null}
            </div>

            <div className="row ">
 
                {/* upload form  */}
                <div className="col s12 m8 offset-m2 l3  card form-box"> 

                   

                    <form onSubmit={_handelSubmit} autoComplete="off" encType="multipart/form-data"  className=" resume-form addProjectForm">

                             <p className="center red-text " style={{overflowWrap:'break-word'}}>{error?error:null}</p>

                            {/* upload */}
                        <div className="file-field input-field col s12 ">
                            
                            <div className="btn indigo accent-4 waves-effect waves-light">
                                <span>File</span>
                                <input type="file" name="img_path"  onChange={_handelOnChange} required/>
                            </div>  

                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Project Image" />
                            </div>
                        </div> 

                    {/* button */}
                        <div className="col s12 m6 offset-m3" style={{ display:'flex' , alignItems: 'center',  justifyContent:'center' }}>
                            <button type="submit" className="btn indigo accent-4 waves-effect waves-light">send</button>
                      </div>


                    </form>


                </div>




        {/* Resumes PDF File */}

        {showSpinner?(<div className="col l8 center"><Spinner/></div>):


                // check if the file empty
       singleResume?(
            <div className="col card s12 m12 l8 right pdf-warper" key={singleResume._id}>

                <PdfAllPages pdf={`/uploads/${singleResume.name}`} />
            </div>

        ):(<div className="col s12 m7 offset-m1 card  white blue-grey-text  text-darken-4 " style={{padding:"25px" , height:"12vh", display:'flex', justifyContent:'center' , alignItems:'center'}}>
            <p >{dataLoadingError|| 'THERE IS NO DATA'}</p>
            </div>)





        }

    


            
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