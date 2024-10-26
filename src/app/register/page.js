"use client"; // For client-side rendering

import { TextField, Button } from '@mui/material';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form method="POST" action="/register" className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <TextField
            id="name"
            name="name"
            type="text"
            fullWidth
            variant="outlined"
            required
            className="mb-4"
          />
        </div>

        {/* Email Address */}
        <div className="mt-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <TextField
            id="email"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            required
            className="mb-4"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <TextField
            id="password"
            name="password"
            type="password"
            fullWidth
            variant="outlined"
            required
            className="mb-4"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <label htmlFor="password_confirmation" className="block text-gray-700 mb-2">Confirm Password</label>
          <TextField
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            fullWidth
            variant="outlined"
            required
            className="mb-4"
          />
        </div>

        {/* Already registered link */}
        <div className="flex items-center justify-between mt-4">
          <Link href="/" className="text-sm text-blue-500 hover:underline">
            Already registered?
          </Link>

          {/* Register Button */}
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
