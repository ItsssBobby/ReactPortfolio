import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import './styles.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Navigation(props) {
  const { activePage } = props;

  return (
    <nav>
      <ul>
        <li>
          <Link exact to="/" activeClassName="active">
            About Me
          </Link>
        </li>
        <li>
          <Link exact to="/portfolio" activeClassName="active">
            Portfolio
          </Link>
        </li>
        <li>
          <Link exact to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
        <li>
          <Link exact to="/resume" activeClassName="active">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Resume() {
  const [showPdfModal, setShowPdfModal] = useState(true);

  const handleCloseModal = () => {
    setShowPdfModal(false);
  };

  return (
    <section>
      <h2>Resume</h2>

      {showPdfModal && (
        <div className="pdf-modal">
          <div className="pdf-modal-content">
            <span className="pdf-modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <Document file="your-resume-url.docx" onLoadError={console.error}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      )}

      <p>
        Click <a href="#" onClick={() => setShowPdfModal(true)}>here</a> to view/download my resume.
      </p>
    </section>
  );
}

export { Navigation, Resume };