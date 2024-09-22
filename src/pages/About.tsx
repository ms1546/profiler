import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <main className="flex-grow container mx-auto px-4 py-8">

                <div className="mb-4">
                    <Badge variant="info">Personal Info</Badge>
                </div>

                <Alert variant="success">
                    <AlertTitle>About Me</AlertTitle>
                    <AlertDescription>
                        This is a brief overview of my professional background.
                    </AlertDescription>
                </Alert>

                <Card className="max-w-lg mx-auto mt-6">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center">About Me</CardTitle>
                        <CardDescription className="text-center text-gray-600">Personal Information</CardDescription>
                    </CardHeader>
                    <CardContent className="text-lg text-gray-600">
                        <p className="text-center">
                            Hello! I’m a software developer with a passion for creating web applications.
                        </p>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}

export default About;
