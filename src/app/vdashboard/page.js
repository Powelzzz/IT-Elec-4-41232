import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Sidebar = () => {
    return (
        <div className="main-sidebar w-64 bg-gray-800 text-white h-screen">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand p-4">
                    <a href="/" className="text-lg font-bold">MediMart</a>
                </div>
                <ul className="sidebar-menu">
                <li className="active">
                        <a href="/" className="nav-link flex items-center p-2 hover:bg-gray-700">
                            <i className="fas fa-fire mr-2"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="active">
                        <a href="/profile" className="nav-link flex items-center p-2 hover:bg-gray-700">
                            <i className="fas fa-fire mr-2"></i>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link flex items-center p-2 hover:bg-gray-700">
                            <i className="fas fa-list mr-2"></i>
                            <span>Manage Products</span>
                        </a>
                    </li>
                    <li className="active">
                        <a href="/messenger" className="nav-link flex items-center p-2 hover:bg-gray-700">
                            <i className="fas fa-fire mr-2"></i>
                            <span>Messenger</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link flex items-center p-2 hover:bg-gray-700">
                            <i className="fas fa-shopping-cart mr-2"></i>
                            <span>Orders</span>
                        </a>
                    </li>
                    {/* Add more sidebar items as needed */}
                </ul>
            </aside>
        </div>
    );
};

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
            <section id="wsus__dashboard" className="py-8 flex-1">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold mb-6">{site_name} || User Dashboard</h1>
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
    );
};

export default Dashboard;
