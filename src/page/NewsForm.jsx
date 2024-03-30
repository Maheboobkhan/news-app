import React, { useState } from 'react';
import { useNavigate } from'react-router-dom';

const AddNewsForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        status: 'draft', // Default value is 'draft'
        description: '', // New textarea field
        imageUrl: '' // New input field for image URL
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('https://news-app-backend-m5o0.onrender.com/api/news', { // Update the URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('News added successfully');
                setFormData({
                    title: '',
                    category: '',
                    status: 'draft',
                    description: '', // Reset textarea field
                    imageUrl: '' // Reset image URL field
                });

                navigate('/admin-main-page');
            } else {
                throw new Error('Failed to add news');
            }
        } catch (error) {
            console.error('Error adding news:', error);
            alert('Failed to add news. Please try again later.');
        }
    };

    return (
        <div className="max-w-md mx-auto py-[20px]">
            <h2 className="text-xl font-semibold mb-4">Add News</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold" htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold" htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold" htmlFor="status">Status:</label>
                    <select id="status" name="status" value={formData.status} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2">
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold" htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2" rows="5"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold" htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Enter Image URL" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add News</button>
            </form>
        </div>
    );
};

export default AddNewsForm;
