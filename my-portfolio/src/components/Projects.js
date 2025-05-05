import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';

// You'll need to import your project images
import project1Image from '../images/project1.png';
import project2Image from '../images/project2.png';
import project3Image from '../images/project3.png';
// import project3Image from '../images/project3.jpg';

function ProjectCard({ title, description, imageUrl, technologies, githubUrl, liveUrl, presentationUrl }) {
    return (
        <div className="project-card mb-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="project-image-container">
                        <img 
                            src={imageUrl} 
                            className="project-image" 
                            alt={title} 
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="project-content">
                        <h2 className="project-title">{title}</h2>
                        
                        {/* Render description as paragraphs if it's an array, otherwise as single paragraph */}
                        {Array.isArray(description) ? (
                            description.map((paragraph, index) => (
                                <p key={index} className="project-description">{paragraph}</p>
                            ))
                        ) : (
                            <p className="project-description">{description}</p>
                        )}
                        
                        <div className="tech-stack">
                            {technologies.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {githubUrl && (
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FontAwesomeIcon icon={faGithub} /> Code
                                </a>
                            )}
                            {presentationUrl && (
                                <a href={presentationUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FontAwesomeIcon icon={faFilePowerpoint} /> Project Results
                                </a>
                            )}
                            {liveUrl && (
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    // Project data
    const projects = [
        {
            id: 1,
            title: "Generative AI for Urban Forms",
            description: ["A Gen AI tool that helps urban planners with rapid site simulations. Urban planners typically spend weeks manually creating these visualizations. This tool helps planners quickly test if their ideas are practical and visualize the impact before any real construction begins.",
            "Land plot and its buildings attributes are extracted into a graph. This graphs are used to train the Graph VAE model. The model generates realistic building shapes with appropriate sizes and heights based on the plot's size, shape and desired density.",
            "Code repository unavailable as this project was done in collaboration with URA who retained ownership of the codebase"],
            imageUrl: project1Image,
            technologies: ["Python", "PyTorch", "Shapely", "Matplotlib"],
            presentationUrl: "https://smu-my.sharepoint.com/:p:/g/personal/yxcheng_2021_scis_smu_edu_sg/EfrPbkBU6w1JqiNC5szsBC4B1XsQZ4vvZ9jl9bl5QZ7Bkg?e=hcKQtA", // Add the URL to your presentation
            liveUrl: null
        },
        {
            id: 2,
            title: "Artwork Deep Fake Detection",
            description: ["Aims to identify manipulated artwork using computer vision. This project tests the performance of CNN and ResNet architectures to detect subtle inpainting and manipulation in digital art images that might be invisible to the human eye.",  
            "By implementing SVM classifiers in the final network layer instead of traditional softmax layers, the model achieved improved accuracy. The system provides art galleries, and digital marketplaces with a powerful tool to verify artwork integrity and combat increasingly sophisticated digital forgeries."],
            imageUrl: project2Image,
            technologies: ["Python", "Tensorflow", "OpenCV", "ResNet", "SVM"],
            githubUrl: "https://github.com/YingXuan99/ArtworkDeepFakeDetection",
            liveUrl: null
        },
        {
            id: 3,
            title: "Ray Of Hope Dashboard",
            description: [
            "The interactive dashboard, built with D3.js and React, enables stakeholders to analyze year-over-year platform performance and compare metrics against competing platforms like Give2Children (G2C). Users can toggle between different data views including campaign completion status, outlier exclusion, and categorical breakdowns through an intuitive interface. Dashboard helps track campaign effectiveness, success rates, and category-specific performance trends YoY. The data is webscrapped from RoH & G2C's websites using BeautifulSoup, before being process and displayed on the dashboard"],
            imageUrl: project3Image, 
            technologies: ["React", "D3.js", "JavaScript", "BeautifulSoup"],
            githubUrl: "https://github.com/YingXuan99/RoH_Analysis",
            liveUrl: "https://yingxuan99.github.io/RoH_Analysis/"
        }
    ];

    return (
        <div className="projects-content">
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <h1 className="Title data">My Projects</h1>
                    <p className="project-subtitle">Here are some projects I've worked on recently</p>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    {projects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            technologies={project.technologies}
                            githubUrl={project.githubUrl}
                            presentationUrl={project.presentationUrl}
                            liveUrl={project.liveUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;