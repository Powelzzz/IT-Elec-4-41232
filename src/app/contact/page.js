import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const Contact = ({ settings = {} }) => {
    const {
        contact_email = '',
        contact_phone = '',
        contact_address = '',
        map = ''
    } = settings;

    return (
        <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <section className="py-6 text-center">
                <h4 className="text-xl font-semibold">Contact Us</h4>
                <ul className="flex justify-center space-x-2">
                    <li><a href="/" className="text-blue-600">Home</a></li>
                    <li><span> / </span></li>
                    <li><span className="text-gray-500">Contact Us</span></li>
                </ul>
            </section>

            {/* Contact Info */}
            <section className="flex flex-wrap justify-center py-8">
                <div className="w-full max-w-xs xl:max-w-sm">
                    <div className="space-y-4 text-center">
                        {contact_email && (
                            <div className="flex justify-center items-center">
                                <i className="fal fa-envelope mr-2"></i>
                                <div>
                                    <Typography variant="h6">Mail Address</Typography>
                                    <a href={`mailto:${contact_email}`} className="text-blue-600">{contact_email}</a>
                                </div>
                            </div>
                        )}
                        {contact_phone && (
                            <div className="flex justify-center items-center">
                                <i className="far fa-phone-alt mr-2"></i>
                                <div>
                                    <Typography variant="h6">Phone Number</Typography>
                                    <a href={`tel:${contact_phone}`} className="text-blue-600">{contact_phone}</a>
                                </div>
                            </div>
                        )}
                        {contact_address && (
                            <div className="flex justify-center items-center">
                                <i className="fal fa-map-marker-alt mr-2"></i>
                                <div>
                                    <Typography variant="h6">Contact Address</Typography>
                                    <span>{contact_address}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full max-w-md pl-4">
                    <Typography variant="h5" className="mb-4 text-center">Send Us a Message</Typography>
                    <form id="contact-form" className="flex flex-col items-center">
                        <div className="space-y-4 w-full">
                            <TextField fullWidth label="Your Name" name="name" variant="outlined" />
                            <TextField fullWidth label="Email" name="email" variant="outlined" />
                            <TextField fullWidth label="Subject" name="subject" variant="outlined" />
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                variant="outlined"
                                multiline
                                rows={5}
                            />
                            <Button type="submit" variant="contained" color="primary" id="form-submit">Send Now</Button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Map */}
            <section className="py-8">
                <div className="w-full">
                    <iframe
                        src={map}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
