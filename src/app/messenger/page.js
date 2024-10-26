"use client";

import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Avatar, Button, TextField } from '@mui/material';

const ChatBox = () => {
    const chatUsers = [
        { id: 1, name: 'Rizal', image: '/path/to/image1.jpg' },
        { id: 2, name: 'Maria', image: '/path/to/image2.jpg' },
        // Add more chat users as needed
    ];

    return (
        <section className="section p-6 bg-gray-100">
            <div className="section-header mb-6">
                <h1 className="text-3xl font-bold">Messages</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active"><a href="#" className="text-blue-600">Dashboard</a></div>
                    <div className="breadcrumb-item"><a href="#" className="text-blue-600">Components</a></div>
                    <div className="breadcrumb-item">Chat Box</div>
                </div>
            </div>

            <div className="flex space-x-6">
                {/* User List */}
                <div className="w-1/3">
                    <Card className="h-[70vh] shadow-lg rounded-lg overflow-hidden">
                        <CardHeader title="Who's Online?" className="bg-blue-600 text-white font-semibold" />
                        <CardContent className="p-0">
                            <ul className="list-none p-0">
                                {chatUsers.map(user => (
                                    <li key={user.id} className="flex items-center py-3 border-b border-gray-300 hover:bg-gray-200 transition-colors duration-200">
                                        <Avatar alt={user.name} src={user.image} className="mr-3" />
                                        <div>
                                            <div className="font-semibold">{user.name}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Chat Area */}
                <div className="w-2/3">
                    <Card className="chat-box h-[70vh] shadow-lg rounded-lg overflow-hidden">
                        <CardHeader title="Chat with Rizal" className="bg-blue-600 text-white font-semibold" />
                        <CardContent className="chat-content h-[60vh] overflow-y-scroll bg-gray-50 p-4 rounded-md">
                            {/* Static Messages */}
                            <div className="chat-item chat-left flex mb-3">
                                <Avatar alt="Rizal" src="/path/to/image1.jpg" className="mr-2" />
                                <div className="chat-details">
                                    <div className="bg-blue-200 rounded-lg p-2">
                                        <div className="chat-text">Hello, how are you?</div>
                                        <div className="chat-time text-gray-500 text-xs">10:00 AM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-item chat-right flex mb-3 justify-end">
                                <div className="chat-details">
                                    <div className="bg-green-200 rounded-lg p-2">
                                        <div className="chat-text">I'm good, thanks!</div>
                                        <div className="chat-time text-gray-500 text-xs">10:01 AM</div>
                                    </div>
                                </div>
                                <Avatar alt="User" src="/path/to/user-image.jpg" className="ml-2" />
                            </div>
                            {/* More static messages can be added here */}
                        </CardContent>
                        <CardActions>
                            <form className="flex items-center p-2">
                                <TextField
                                    className="flex-1"
                                    placeholder="Type a message..."
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                        className: "rounded-full",
                                    }}
                                />
                                <Button className="ml-2" variant="contained" color="primary" size="small" style={{ borderRadius: '20px' }}>
                                    Send
                                </Button>
                            </form>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ChatBox;
