import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
                <p className="text-lg text-gray-600 text-center">This page will contain information about me.</p>
            </main>
            <Footer />
        </div>
    );
}

export default About;
