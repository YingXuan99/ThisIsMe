import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SocialIcons() {
    return (
        <div className="social-icons-container">
            <a href="https://github.com/YingXuan99" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/yingxuan-cheng" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:chengyingxuan30@gmail.com" className="social-icon">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    );
}

export default SocialIcons;