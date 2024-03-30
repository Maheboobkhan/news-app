import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ImageWithDescription = () => {

    const { id } = useParams(); // Extract ID from URL
    console.log('ID:', id); // Log ID to console
    const [feedData, setFeedData] = useState(null); // State to hold feed data

    useEffect(() => {
        const fetchDataById = async () => {
            try {
                const response = await axios.get(`https://news-app-backend-m5o0.onrender.com/api/news/${id}`);
                console.log('Fetched feed data by ID:', response.data); // Accessing data property
                setFeedData(response.data); // Setting data to state
            } catch (error) {
                console.error('Error fetching feed data by ID:', error);
            }
        };
    
        fetchDataById();
    }, [id]);
    
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-[35px] font-bold mb-4 mt-[20px]">{feedData?.title}</h1>
            <div className="flex flex-wrap mt-[2rem]">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
                    <img
                        src={feedData?.imageUrl}
                        alt="Your Image"
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 pl-6">
                    <div className="description">
                        <p className='leading-[25px]'>
                            {feedData?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageWithDescription;
