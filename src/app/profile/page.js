// src/app/profile/page.js

import { Button, TextField, Typography, Container, Paper } from '@mui/material';

const ProfilePage = () => {
    return (
        <Container maxWidth="lg" className="py-8">
            <Paper elevation={3} className="p-6">
                <Typography variant="h4" className="flex items-center">
                    <i className="far fa-user mr-2"></i> Profile
                </Typography>
                
                <div className="mt-6">
                    <Typography variant="h6">Basic Information</Typography>
                    <form action="/user/profile/update" method="POST" encType="multipart/form-data">
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="w-1/4">
                                <div className="mb-4">
                                    <img
                                        src="/images/product1.jpg" 
                                        alt="Profile"
                                        className="img-fluid rounded-full w-full"
                                    />
                                    <input type="file" name="image" className="mt-2" />
                                </div>
                            </div>
                            <div className="w-3/4">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Name"
                                    name="name"
                                    defaultValue="User Name" 
                                    className="mb-4"
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    defaultValue="user@example.com" 
                                    className="mb-4"
                                />
                            </div>
                        </div>
                        <Button variant="contained" color="primary" type="submit" className="mt-4">
                            Upload
                        </Button>
                    </form>

                    <div className="mt-6">
                        <Typography variant="h6">Update Password</Typography>
                        <form action="/user/profile/update/password" method="POST">
                            <div className="flex flex-col md:flex-row md:space-x-4">
                                <TextField
                                    variant="outlined"
                                    label="Current Password"
                                    type="password"
                                    name="current_password"
                                    className="mb-4 md:w-1/3"
                                />
                                <TextField
                                    variant="outlined"
                                    label="New Password"
                                    type="password"
                                    name="password"
                                    className="mb-4 md:w-1/3"
                                />
                                <TextField
                                    variant="outlined"
                                    label="Confirm Password"
                                    type="password"
                                    name="password_confirmation"
                                    className="mb-4 md:w-1/3"
                                />
                            </div>
                            <Button variant="contained" color="primary" type="submit">
                                Upload
                            </Button>
                        </form>
                    </div>
                </div>
            </Paper>
        </Container>
    );
};

export default ProfilePage;
