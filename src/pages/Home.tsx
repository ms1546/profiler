import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">Welcome to the Home Page</h1>

                <div className="mb-4">
                    <Badge variant="secondary">New Feature!</Badge>
                </div>

                <Alert variant="info">
                    <AlertTitle>Announcement</AlertTitle>
                    <AlertDescription>
                        This is a new feature we just added! Check it out below.
                    </AlertDescription>
                </Alert>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is this website?</AccordionTrigger>
                        <AccordionContent>
                            This website is a portfolio showcasing my projects and skills.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What can you find here?</AccordionTrigger>
                        <AccordionContent>
                            You can explore my projects, learn more about my background, and contact me.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>
    );
}

export default Home;
