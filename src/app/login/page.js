"use client"; // Ensure this is client-side rendered

import { TextField, Button } from '@mui/material';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form method="POST" action="/login" className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email Address */}
        <div>
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

        {/* Login Button */}
        <div className="mt-6">
        <Link href="/vdashboard">
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
          </Link>
        </div>

        {/* Button linking to register page */}
        <div className="text-center mt-6">
          <Link href="/register">
            <Button variant="outlined" color="secondary" fullWidth>
              Don't have an account? Register
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

