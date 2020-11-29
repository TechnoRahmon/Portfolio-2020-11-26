import React ,{useState} from 'react';
import {Document , Page} from 'react-pdf';




const Pdf_All_Pages = (props) => {

    const [numPages , setNumPages ] = useState(null)
    console.log(props);


    
    const onDocumentLoadSuccess = ({numPages}) =>{
            setNumPages(numPages); 
    }


    const {pdf} = props

    return (
      <Document 
        file={pdf}
        options={{worksrc:'/pdf.work.js'}}
        onLoadSuccess={onDocumentLoadSuccess}
        >
        {Array.from(new Array(numPages), (el,index)=>(
            <Page key={`Page_${index+1}`} numPages={index+1}></Page>   
        ))}

      </Document>
    );
}

export default Pdf_All_Pages;
