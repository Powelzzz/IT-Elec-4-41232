"use client"; // This directive is included for client components

import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Slider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const categories = ['Electronics', 'Clothing', 'Home Appliances', 'Books', 'Toys'];
const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D'];

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const products = [
        { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150?text=Product+1' },
        { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150?text=Product+2' },
        { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150?text=Product+3' },
        { id: 4, name: 'Product 4', price: 39.99, image: 'https://via.placeholder.com/150?text=Product+4' },
        { id: 5, name: 'Product 5', price: 24.99, image: 'https://via.placeholder.com/150?text=Product+5' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
    <header className="w-full bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="text-2xl font-bold">MediMart Express</div>
            <nav className="space-x-6">
                <a href="/" className="text-gray-600 hover:text-gray-800">Login</a>
                <a href="/products" className="text-gray-600 hover:text-gray-800">Products</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
                <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
            </nav>
        </div>
    </header>


            <Container className="mt-10">
                <Grid container spacing={4}>
                    {/* Sidebar */}
                    <Grid item xs={12} md={4}>
                        <Paper className="p-4"style={{ height: '100%', minHeight: '400px', width: '250px' }}>
                            <Typography variant="h6">Categories</Typography>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Category</InputLabel>
                                <Select value={selectedCategory} onChange={handleCategoryChange}>
                                    <MenuItem value=""><em>All</em></MenuItem>
                                    {categories.map((category) => (
                                        <MenuItem key={category} value={category}>{category}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Typography variant="h6" className="mt-4">Brands</Typography>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Brand</InputLabel>
                                <Select value={selectedBrand} onChange={handleBrandChange}>
                                    <MenuItem value=""><em>All</em></MenuItem>
                                    {brands.map((brand) => (
                                        <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Typography variant="h6" className="mt-4">Price Range</Typography>
                            <Slider
                                value={priceRange}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={100}
                            />
                        </Paper>
                    </Grid>

                    {/* Products Grid */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" className="mb-4">Our Products</Typography>
                        <Grid container spacing={2}>
                            {products
                                .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
                                .map(product => (
                                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                                        <Paper className="p-4">
                                            <img src={product.image} alt={product.name} className="w-full mb-2" />
                                            <Typography variant="h6">{product.name}</Typography>
                                            <Typography variant="body1">${product.price.toFixed(2)}</Typography>
                                            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded mt-2">Add to Cart</button>
                                        </Paper>
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductsPage;
