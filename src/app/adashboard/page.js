"use client";

import React from 'react';
import { Card, CardContent, Typography, Avatar, Menu, MenuItem } from '@mui/material';

const Dashboard = ({ settings = {} }) => {
    const {
        site_name = 'MediMart',
        currency_icon = '$',
    } = settings;

    const data = {
        todaysOrder: 5,
        todaysPendingOrder: 2,
        totalOrder: 100,
        totalPendingOrder: 20,
        totalCompleteOrder: 80,
        totalProducts: 50,
        todaysEarnings: 150,
        monthEarnings: 3000,
        yearEarnings: 35000,
        totalEarnings: 100000,
        totalReviews: 25,
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <section id="wsus__dashboard" className="py-8 px-4">
                    <div className="container mx-auto">
                        <h1 className="text-2xl font-bold mb-6">{site_name} || Vendor Dashboard</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {Object.entries(data).map(([key, value]) => (
                                <Card key={key} className="bg-red-500 text-white">
                                    <CardContent className="flex flex-col items-center text-center">
                                        <i className="fas fa-cart-plus text-4xl mb-2"></i>
                                        <Typography variant="body1" className="font-semibold">
                                            {key.replace(/([A-Z])/g, ' $1').trim().replace("Td's", "Today's")}
                                        </Typography>
                                        <Typography variant="h6">
                                            {key.includes('Earnings') ? `${currency_icon}${value}` : value}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <button className="text-xl">
                <i className="fas fa-bars"></i>
            </button>
            <div className="flex items-center">
                <Avatar alt="User Avatar" src="/path/to/avatar.jpg" className="mr-2" onClick={handleClick} />
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className="dropdown-menu mt-2 bg-white text-black rounded shadow-lg"
                >
                    <MenuItem onClick={handleClose}>
                        <a href="/admin/profile" className="block px-4 py-2">Profile</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <a href="/admin/settings" className="block px-4 py-2">Settings</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <form method="POST" action="/logout">
                            <button type="submit" className="block px-4 py-2 text-red-500">Logout</button>
                        </form>
                    </MenuItem>
                </Menu>
            </div>
        </nav>
    );
};

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white h-screen">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand p-4">
                    <a href="#" className="text-lg font-bold">Your Site Name</a>
                </div>
                <ul className="sidebar-menu">
                    <li className="menu-header px-4 py-2">Dashboard</li>
                    <li className="active">
                        <a href="#" className="nav-link flex items-center p-2 hover:bg-gray-700">
                            <i className="fas fa-fire mr-2"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="menu-header px-4 py-2">Ecommerce</li>
                    {/* Add more sidebar items here */}
                </ul>
            </aside>
        </div>
    );
};

export default Dashboard;
