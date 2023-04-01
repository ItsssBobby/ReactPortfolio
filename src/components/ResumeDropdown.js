import React, { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function ViewResumeButton({ onButtonClick }) {
  const handleClick = () => {
    onButtonClick();
  };

  return <button onClick={handleClick}>View</button>;
}

function ResumeDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const dropdownRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownloadResume = () => {
    window.open('/resume.docx', '_blank');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowViewer(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="dropdown">
      <button onMouseEnter={() => setShowDropdown(true)}>Resume</button>
      {showDropdown && (
        <ul className="dropdown-options">
          <li>
            <ViewResumeButton onButtonClick={() => setShowViewer(true)} />
          </li>
          <li>
            <button onClick={handleDownloadResume}>Download</button>
          </li>
        </ul>
      )}
      {showViewer && (
        <div className="pdf-modal" onClick={() => setShowViewer(false)}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-container">
              <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} />
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { ResumeDropdown };