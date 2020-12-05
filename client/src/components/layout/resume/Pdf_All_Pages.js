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
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadError={console.log}
        onLoadSuccess={onDocumentLoadSuccess}
        >
        {Array.from(new Array(numPages), (el,index)=>(
            <Page key={`Page_${index+1}`} pageNumber={index+1}></Page>   
        ))}

      </Document>
    );
}

export default Pdf_All_Pages;


//if workerSrc dosent work we use one of these solutions

// Copy node_modules/pdfjs-dist/build/pdf.worker.js to public/pdf.worker.js
// options={{workerSrc: "pdf.worker.js"}}


// Add this props inside the Document component from react-pdf . [It is already done in the above project. ]