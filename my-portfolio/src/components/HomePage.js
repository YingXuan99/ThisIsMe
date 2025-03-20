import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';

function HomePage() {
    return (
        <>
            {/* Container for About Me section only */}
            <div className="container mt-3">
                <div id="about">
                    <AboutMe />
                    <div className="section-spacer-with-line"></div>
                </div>
            </div>

            
            {/* Full-width Projects Section */}
            <div id="projects">
                <Projects />
                <div className="section-spacer-with-line"></div>
            </div>

            {/* Full-width Resume Section */}
            <div id="resume">
                <Resume />
            </div>
        </>
    );
}

export default HomePage;