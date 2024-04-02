import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditNewsForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        status: 'draft',
        description: '',
        imageUrl: ''
    });

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await axios.get(`https://news-app-backend-lac.vercel.app/api/news/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNewsData();
    }, [id]);

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
            const response = await axios.put(`https://news-app-backend-lac.vercel.app/api/news/${id}`, formData);
            console.log('Response:', response);
            if (response) {
                alert('News updated successfully');
                navigate('/admin-main-page'); // Redirect to home page after update
            } else {
                throw new Error('Failed to update news');
            }
        } catch (error) {
            console.error('Error updating news:', error);
            alert('Failed to update news. Please try again later.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-5">
            <h2 className="text-xl font-semibold mb-4">Edit News</h2>
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
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update News</button>
            </form>
        </div>
    );
};

export default EditNewsForm;
