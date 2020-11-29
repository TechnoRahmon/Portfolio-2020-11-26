import React,{ useState , useEffect , useContext} from 'react';
import ResumeContext from '../../context/resume/resumeContext';
import {Link } from 'react-router-dom';
import PdfAllPages from '../layout/Pdf_All_Pages';

const Resume = () => {

    const [err, setErr] = useState('');
    const [selectedFile, setFile] = useState([]);
    const [singleResume , setResume ] = useState({})
    const { error , resumes , success, addResume , getResume } = useContext(ResumeContext);


    useEffect(()=>{
        if(error) setErr(error)
        
        //get resume data
        getResume()

        //take the first item only
        if (resumes)setResume(resumes[0])
    },[error])

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
        <div className="container center">
            <div className="row">
                <div className="col s12"> <p>{err?err:null}</p></div>
            </div>
           
       
            
   
            <form onSubmit={_handelSubmit} autoComplete="off" encType="multipart/form-data" className="row">

                <div className="col s12 m6">
                    <input type="file" id="myfile" onChange={_handelOnChange}/>
                </div>
            

                <div className="col s12 m6">
                    <button>upload</button>
                </div>

            </form>
            
            {/* display reumes*/}
            {singleResume?
                <div className="row" key={singleResume._id}>
                    <div className="col s12">
                        
                        <h2>{singleResume.name}</h2>
                        {singleResume.path}
                    </div>
                    <div className="col s12">
                       
                    </div>
                </div>
            :<p>THERE IS NO DATA</p>}
            
        </div>
    );
}

export default Resume;
