import React,{ useState , useEffect , useContext} from 'react';
import ResumeContext from '../../context/resume/resumeContext';
import {Link } from 'react-router-dom';

const Resume = () => {

    const [err, setErr] = useState('');
    const { error , resumes , success } = useContext(ResumeContext);


    useEffect(()=>{
        if(error) setErr(error)

    },[err])


    const _handelSubmit=(e)=>{
            e.preventDefault();
            console.log('submit');
    }

    return (
        <div>
            <p>{err?err:null}</p>

            <form onSubmit={_handelSubmit} autoComplete="off" encType="multipart/form-data">
                <input type="file" id="myfile" />
                <a href="http://localhost:5000/api/v2/resume/5fc1715b7004ee1e24ddf05a/download">download</a>
                <button>upload</button>
            </form>
            
        </div>
    );
}

export default Resume;
