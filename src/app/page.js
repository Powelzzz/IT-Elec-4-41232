"use client"; // For client-side rendering in Next.js

import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { FaTruck, FaHeadset, FaExchangeAlt, FaCreditCard, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// HomeServices Component
const HomeServices = () => {
    return (
        <section id="wsus__home_services" className="home_service_2 bg-gray-100 py-10">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xl={3} sm={6} lg={3} className="pe-lg-0">
                        <Paper className="wsus__home_services_single home_service_single_2 border-l-4 border-blue-500 p-4 flex flex-col items-center text-center">
                            <FaTruck className="text-4xl text-blue-500 mb-2" />
                            <Typography variant="h5" className="font-semibold mb-1">Free Worldwide Shipping</Typography>
                            <Typography variant="body2" className="text-gray-600">Free shipping cost for all countries</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} sm={6} lg={3} className="pe-lg-0">
                        <Paper className="wsus__home_services_single home_service_single_2 p-4 flex flex-col items-center text-center">
                            <FaHeadset className="text-4xl text-blue-500 mb-2" />
                            <Typography variant="h5" className="font-semibold mb-1">24/7 Customer Support</Typography>
                            <Typography variant="body2" className="text-gray-600">Friendly 24/7 customer support</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} sm={6} lg={3} className="pe-lg-0">
                        <Paper className="wsus__home_services_single home_service_single_2 p-4 flex flex-col items-center text-center">
                            <FaExchangeAlt className="text-4xl text-blue-500 mb-2" />
                            <Typography variant="h5" className="font-semibold mb-1">Money Back Guarantee</Typography>
                            <Typography variant="body2" className="text-gray-600">We return money within 30 days</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} sm={6} lg={3}>
                        <Paper className="wsus__home_services_single home_service_single_2 p-4 flex flex-col items-center text-center">
                            <FaCreditCard className="text-4xl text-blue-500 mb-2" />
                            <Typography variant="h5" className="font-semibold mb-1">Secure Online Payment</Typography>
                            <Typography variant="body2" className="text-gray-600">We possess SSL / Secure Certificate</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

// Products Section Component
const ProductsSection = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$19.99',
            image: '/images/product1.jpg',
            description: 'A high-quality product to meet your needs.',
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$24.99',
            image: '/images/product2.jpg',
            description: 'Another great product for your collection.',
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$29.99',
            image: '/images/product3.jpg',
            description: 'Top of the line product at a great price.',
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$29.99',
            image: '/images/cetaphil.png',
            description: 'Top of the line product at a great price.',
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$29.99',
            image: '/images/dove.jpg',
            description: 'Top of the line product at a great price.',
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$29.99',
            image: '/images/shamp.jpg',
            description: 'Top of the line product at a great price.',
        },
    ];

    return (
        <section className="mt-10 container mx-auto px-4 w-full max-w-4xl">
            <Typography variant="h3" className="text-center mb-4">Our Products</Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Card key={product.id} className="shadow-md bg-white p-4 rounded">
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.name}
                        />
                        <CardContent>
                            <Typography variant="h6" className="font-semibold">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" className="mb-2">
                                {product.description}
                            </Typography>
                            <Typography variant="body1" className="text-gray-600">
                                {product.price}
                            </Typography>
                        </CardContent>
                        <Button
                            variant="outlined"
                            className="border-blue-500 text-blue-500 mt-4"
                        >
                            Add to Cart
                        </Button>
                    </Card>
                ))}
            </div>
        </section>
    );
};

// Flash Sale Slider Component
const FlashSaleSlider = () => {
    const flashSaleProducts = [
        {
            id: 1,
            name: 'Flash Sale Product 1',
            price: '$14.99',
            image: '/images/wheelchair.jpg',
        },
        {
            id: 2,
            name: 'Flash Sale Product 2',
            price: '$19.99',
            image: 'https://via.placeholder.com/150?text=Flash+Sale+2',
        },
        {
            id: 3,
            name: 'Flash Sale Product 3',
            price: '$9.99',
            image: 'https://via.placeholder.com/150?text=Flash+Sale+3',
        },
    ];

    const [currentFlashSaleIndex, setCurrentFlashSaleIndex] = useState(0);

    const prevFlashSale = () => {
        setCurrentFlashSaleIndex((prevIndex) => (prevIndex === 0 ? flashSaleProducts.length - 1 : prevIndex - 1));
    };

    const nextFlashSale = () => {
        setCurrentFlashSaleIndex((prevIndex) => (prevIndex === flashSaleProducts.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="mt-10 container mx-auto px-4 w-full max-w-4xl">
            <div className="bg-white p-6 rounded shadow-lg w-full">
                <h3 className="text-3xl mb-4 text-center">Flash Sale!</h3>
                <div className="flex items-center">
                    <button onClick={prevFlashSale} className="bg-blue-500 text-white px-3 py-2 rounded-l hover:bg-blue-600 transition duration-200">
                        <FaArrowLeft />
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
                        <div className="shadow-md p-4 rounded text-center">
                            <img src={flashSaleProducts[currentFlashSaleIndex].image} alt={flashSaleProducts[currentFlashSaleIndex].name} className="w-full mb-4" />
                            <h6 className="font-semibold">{flashSaleProducts[currentFlashSaleIndex].name}</h6>
                            <p className="text-gray-600">{flashSaleProducts[currentFlashSaleIndex].price}</p>
                        </div>
                    </div>
                    <button onClick={nextFlashSale} className="bg-blue-500 text-white px-3 py-2 rounded-r hover:bg-blue-600 transition duration-200">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

// Main EcommerceLandingPage Component
const EcommerceLandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Header */}
            <header className="w-full bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">MediMart Express</div>
                    <nav className="space-x-4">
                        <a href="/login" className="text-gray-600 hover:text-gray-800">Login</a>
                        <a href="/track" className="text-gray-600 hover:text-gray-800">Track Order</a>
                        <a href="/products" className="text-gray-600 hover:text-gray-800">Products</a>
                        <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
                        <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
                    </nav>
                </div>
            </header>

            {/* Main Section */}
            <main className="flex flex-col items-center mt-10">
                <h2 className="text-4xl mb-4 text-center">Discover Amazing Products</h2>
                <p className="text-lg mb-6 text-center max-w-xl">
                    Shop nedical supplies and enjoy exclusive offers at MediMart Express. Your one-stop shop for all your Medical Supply Needs!
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Shop Now</button>

                {/* Products Section */}
                <ProductsSection />

                {/* Flash Sale Slider Section */}
                <FlashSaleSlider />

                {/* Home Services Section */}
                <HomeServices />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-10 w-full">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        {/* Footer Content */}
                        <div className="w-full sm:w-1/4 mb-6">
                            <div className="flex flex-col items-start">
                                <a href="/" className="mb-4">
                                    <img src="/path/to/logo.png" alt="Logo" className="h-10" />
                                </a>
                                <p className="text-gray-400">123-456-7890</p>
                                <a href="mailto:info@example.com" className="flex items-center mb-2 text-gray-400 hover:text-white transition duration-200">
                                    <i className="fas fa-envelope mr-2"></i>
                                    info@example.com
                                </a>
                                <p>123 Main St, Anytown, USA</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="w-full sm:w-1/4 mb-6">
                            <h5 className="text-lg font-bold mb-4">Follow Us</h5>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition duration-200 transform hover:scale-110">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-200 transform hover:scale-110">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-200 transform hover:scale-110">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full sm:w-1/4 mb-6">
                            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
                            <ul>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Newsletter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Products</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="w-full sm:w-1/4 mb-6">
                            <h5 className="text-lg font-bold mb-4">Newsletter</h5>
                            <p className="text-gray-400 mb-2">Sign up to receive updates and special offers.</p>
                            <input
                                type="email"
                                className="w-full px-3 py-2 mb-2 text-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                            <button className="w-full bg-blue-500 text-white py-2 rounded">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EcommerceLandingPage;
