import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
    const aboutContent = `
        <p>Your about content goes here. This could be HTML formatted content or plain text that describes your company, its mission, values, and any other relevant information.</p>
    `;

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Breadcrumb Section */}
            <section id="wsus__breadcrumb" className="bg-blue-600 text-white py-4">
                <Container>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg">About</h4>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="javascript:;" className="hover:underline">About</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>

            {/* About Content Section */}
            <section id="wsus__cart_view" className="py-10">
                <Container>
                    <div className="flex justify-center">
                        <Paper elevation={3} className="p-5 w-full max-w-3xl">
                            <Typography variant="h5" component="h2" className="mb-4">
                                About Us
                            </Typography>
                            <div 
                                className="about-content" 
                                dangerouslySetInnerHTML={{ __html: aboutContent }} 
                            />
                        </Paper>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default About;
