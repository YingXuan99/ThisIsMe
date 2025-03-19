import React from 'react';
import profileImage from '../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
    return (
        <div className="container mt-3">
            {/* About Me Title - Centered with VSCode green color */}
            <div className="row mb-2">
                <div className="col-12 text-center">
                    <h1 className="Title about-me-title">About Me</h1>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="row">
                <div className="col-12 mx-auto mb-3">
                    <div className="about-card">
                        <div className="row">
                            {/* Left Column - Profile Image and Social Links */}
                            <div className="col-md-4 text-center">
                                <div className="profile-container">
                                    <img
                                        src={profileImage}
                                        className="profile-image rounded-circle"
                                        alt="Profile"
                                    />
                                    <div className="mt-3">
                                        <h2 className="profile-name">Ying Xuan</h2>
                                        <div className="social-icons-container">
                                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                                                <FontAwesomeIcon icon={faGithub} size="2x" />
                                            </a>
                                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                            </a>
                                            <a href="mailto:your.email@example.com" className="social-icon">
                                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - About Me Text with VSCode syntax highlighting colors */}
                            <div className="col-md-8">
                                <div className="about-text">
                                    <p>
                                        I'm <span className="highlight-type">Ying Xuan</span>,
                                        <span className="highlight-type"> Final Year Student</span> at
                                        <span className="highlight-type"> SMU Information System</span> with a strong
                                        foundation in <span className="highlight-function">Data Analytics</span> and
                                        <span className="highlight-function"> Machine Learning</span>.
                                    </p>

                                    <p>
                                        I have hands-on experience in <span className="highlight-variable">data handling</span>,
                                        <span className="highlight-variable"> dashboarding</span> as well as
                                        <span className="highlight-variable"> machine learning projects</span>, including
                                        <span className="highlight-variable"> computer vision</span> and
                                        <span className="highlight-variable"> generative AI</span>. My work
                                        focuses on creating efficient, impactful solutions that solve real-world
                                        problems. My tech stack includes <span className="highlight-keyword">SQL</span>,
                                        <span className="highlight-keyword"> Python</span>,
                                        <span className="highlight-keyword"> Pandas</span>,
                                        <span className="highlight-keyword"> TensorFlow</span>,
                                        <span className="highlight-keyword"> PyTorch</span>,
                                        <span className="highlight-keyword"> React</span> &
                                        <span className="highlight-keyword"> JavaScript</span>
                                    </p>

                                    <p>
                                        Outside of tech, I enjoy <span className="highlight-string">staying active with martial arts</span> and spending time
                                        with loved ones. I'm eager to apply my skills to tackle new and meaningful
                                        problems
                                    </p>

                                    <p>
                                        This website provides insights into the projects I have worked on and
                                        hopefully allows you to <span className="highlight-string">get to know me better</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;