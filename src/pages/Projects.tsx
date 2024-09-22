import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => {
    return (
        <Card className="max-w-md mx-auto mb-6">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
            </CardContent>
        </Card>
    );
};

const Projects: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const projects = [
        { title: "Project 1", description: "Project 1.", imageUrl: "url-to-image" },
        { title: "Project 2", description: "Project 2.", imageUrl: "url-to-image" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">My Projects</h1>

                <div className="mb-4">
                    <Badge variant="primary">Featured</Badge>
                </div>

                <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                    <DialogTrigger asChild>
                        <Button variant="outline" onClick={() => setIsDialogOpen(true)}>Show Project Details</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Project Details</DialogTitle>
                            <DialogDescription>
                                More information about the project can be found here.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>Close</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <div className="grid grid-cols-1 gap-6">
                    {projects.map(project => (
                        <ProjectCard key={project.title} title={project.title} description={project.description} imageUrl={project.imageUrl} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Projects;
