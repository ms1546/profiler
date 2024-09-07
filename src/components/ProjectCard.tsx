import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ProjectCard;
