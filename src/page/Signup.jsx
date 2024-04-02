import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://news-app-backend-lac.vercel.app/api/signup', formData);
            navigate('/');
            // Redirect or show success message
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error (show error message, etc.)
        }
    };

    return (
        <div className="container mx-auto mt-10 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">Sign Up</button>
            </form>
            <p className="mt-4 text-sm text-center">Already have an account? <Link to="/" className="text-blue-500 hover:underline">Login here</Link></p>
        </div>
    );
}

export default SignupPage;
