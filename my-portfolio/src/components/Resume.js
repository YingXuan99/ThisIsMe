import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Resume() {
    // Use PUBLIC_URL to ensure paths work in both development and production
    const resumePdfPath = `${process.env.PUBLIC_URL}/Ying_Xuan_Resume.pdf`;

    // Function to handle the download
    const handleDownload = () => {
        // Create an anchor element and trigger download
        const link = document.createElement('a');
        link.href = resumePdfPath;
        link.download = 'Ying_Xuan_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-content">
            <div className="row mb-2">
                <div className="col-12 text-center">
                    <h1 className="Title software">My Resume</h1>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12 d-flex justify-content-center">
                    <button
                        className="btn download-btn"
                        onClick={handleDownload}
                    >
                        <FontAwesomeIcon icon={faDownload} className="btn-icon" />
                        <span className="btn-text">Download Resume</span>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="pdf-container">
                        <iframe
                            src={`${resumePdfPath}#view=FitH&zoom=90`}
                            title="Resume PDF"
                            className="resume-pdf"
                            width="100%"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;