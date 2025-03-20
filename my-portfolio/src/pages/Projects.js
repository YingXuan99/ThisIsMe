import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// You'll need to import your project images
// import project1Image from '../images/project1.jpg';
// import project2Image from '../images/project2.jpg';
// import project3Image from '../images/project3.jpg';

function ProjectCard({ title, description, imageUrl, technologies, githubUrl, liveUrl }) {
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
                        <p className="project-description">{description}</p>
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
            title: "Machine Learning Stock Predictor",
            description: "A stock prediction model built with TensorFlow that analyzes historical market data to predict future stock movements. Integrates multiple technical indicators and sentiment analysis from social media.",
            imageUrl: "https://via.placeholder.com/300x200",  // Replace with your image path
            technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
            githubUrl: "https://github.com/yourusername/stock-predictor",
            liveUrl: "https://stock-predictor-demo.example.com"
        },
        {
            id: 2,
            title: "Computer Vision Object Detector",
            description: "Real-time object detection application using computer vision. Built with PyTorch and OpenCV to identify and classify objects in images and video streams with high accuracy.",
            imageUrl: "https://via.placeholder.com/300x200",  // Replace with your image path
            technologies: ["Python", "PyTorch", "OpenCV", "YOLO"],
            githubUrl: "https://github.com/yourusername/object-detector",
            liveUrl: "https://object-detector-demo.example.com"
        },
        {
            id: 3,
            title: "Interactive Data Dashboard",
            description: "A React-based dashboard visualizing complex datasets. Features interactive charts, filters, and data exploration tools to help users gain insights from structured and unstructured data.",
            imageUrl: "https://via.placeholder.com/300x200",  // Replace with your image path
            technologies: ["React", "D3.js", "JavaScript", "Node.js"],
            githubUrl: "https://github.com/yourusername/data-dashboard",
            liveUrl: "https://data-dashboard-demo.example.com"
        }
    ];

    return (
        <div className="container mt-3">
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
                            liveUrl={project.liveUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;