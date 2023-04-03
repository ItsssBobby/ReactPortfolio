import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume({ isModalOpen, setIsModalOpen }) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const resume = `${process.env.PUBLIC_URL}/path/to/your/resume.pdf`;

  return (
    isModalOpen && (
      <div className="resume">
        <div className="resume__backdrop" onClick={handleClose}></div>
        <div className="resume__container">
          <button className="resume__closeButton" onClick={handleClose}>
            &times;
          </button>
          <Document file={resume} className="pdf-container">
            <Page pageNumber={1} className="pdf-container-inner" />
          </Document>
        </div>
      </div>
    )
  );
}

export default { Resume };