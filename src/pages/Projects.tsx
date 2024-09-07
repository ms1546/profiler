import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
    const projects = [
        { title: "Project 1", description: "This is a description for Project 1.", imageUrl: "url-to-image" },
        { title: "Project 2", description: "This is a description for Project 2.", imageUrl: "url-to-image" },
    ];

    return (
        <div>
            <Header />
            <main>
                <h1>My Projects</h1>
                <div>
                    {projects.map(project => (
                        <ProjectCard key={project.title} title={project.title} description={project.description} imageUrl={project.imageUrl} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Projects;
