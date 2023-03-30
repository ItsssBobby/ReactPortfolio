import React, { useState } from 'react';
import { Viewer } from 'react-doc-viewer';

function Resume() {
  const [showDocViewer, setShowDocViewer] = useState(false);

  const handleOpenViewer = () => {
    setShowDocViewer(true);
  };

  const handleCloseViewer = () => {
    setShowDocViewer(false);
  };

  return (
    <section>
      <h2>Resume</h2>

      {showDocViewer && (
        <div className="doc-viewer">
          <div className="doc-viewer-content">
            <span className="doc-viewer-close" onClick={handleCloseViewer}>
              &times;
            </span>
            <Viewer
              fileType="docx"
              filePath="../../public/resume/Resume_-_Robert_McMullen.docx"
            />
          </div>
        </div>
      )}

      <p>
        Click <a href="#" onClick={handleOpenViewer}>here</a> to view my resume.
      </p>
    </section>
  );
}

export default Resume;