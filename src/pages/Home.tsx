import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/card'; // Example card component

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <Card className="mx-auto max-w-lg">
                    <CardHeader>
                        <CardTitle>Welcome to My Profile</CardTitle>
                        <CardDescription>This is the home page.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Explore the features of this site, and feel free to check out the available options below!
                        </p>
                        <Button className="mt-4">Get Started</Button>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
