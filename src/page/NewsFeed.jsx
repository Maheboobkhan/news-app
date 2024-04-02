// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const NewsFeedTable = () => {
//     const [sportNews, setSportNews] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('https://news-app-backend-lac.vercel.app/api/news');
//             console.log('Fetched sport news:', response.data);
//             setSportNews(response.data);
//         } catch (error) {
//             console.error('Error fetching sport news:', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`https://news-app-backend-lac.vercel.app/api/news/${id}`);
//             setSportNews(sportNews.filter(feed => feed._id !== id));
//             setTimeout(() => {
//                 alert('News deleted successfully');
//             }, 300);
//         } catch (error) {
//             console.error('Error deleting news:', error);
//         }
//     };

//     return (
//         <div className="overflow-x-auto">
//             <table className="table-auto w-full">
//                 <thead>
//                     <tr className="bg-gray-200">
//                         <th className="w-[20%] px-4 py-2">Title</th>
//                         <th className="w-[20%] px-4 py-2">Category</th>
//                         <th className="w-[30%] px-4 py-2">Creation Date</th>
//                         <th className="w-[10%] px-4 py-2">Status</th>
//                         <th className="w-[20%] px-4 py-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sportNews.map(feed => (
//                         <tr key={feed._id} className="hover:bg-gray-100">
//                             <td className="w-[20%] text-center border px-4 py-2">{feed.title}</td>
//                             <td className="w-[20%] text-center border px-4 py-2">{feed.category}</td>
//                             <td className="w-[30%] text-center border px-4 py-2">{feed.createdAt}</td>
//                             <td className="w-[10%] text-center border px-4 py-2">{feed.status}</td>
//                             <td className="flex justify-center gap-x-3 border px-4 py-2">
//                                 <Link to={{ pathname: `/view-in-details/${feed._id}`}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">View</Link>
//                                 <Link to={{ pathname: `/edit-news-form/${feed._id}`}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Edit</Link>
//                                 <button onClick={() => handleDelete(feed._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default NewsFeedTable;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsFeedTable = () => {
    const [sportNews, setSportNews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://news-app-backend-lac.vercel.app/api/news');
            console.log('Fetched sport news:', response.data);
            setSportNews(response.data);
        } catch (error) {
            console.error('Error fetching sport news:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://news-app-backend-lac.vercel.app/api/news/${id}`);
            setSportNews(sportNews.filter(feed => feed._id !== id));
            setTimeout(() => {
                alert('News deleted successfully');
            }, 300);
        } catch (error) {
            console.error('Error deleting news:', error);
        }
    };

    return (
        <div className="overflow-x-auto">
            <div className="block md:hidden p-2 min-h-screen bg-[#999]">
                <table className="w-full">
                    <tbody className="flex flex-col gap-y-8">
                        {sportNews.map((feed, index) => (
                            <div className='bg-slate-300' key={feed._id}>
                                <tr>
                                    <td className="w-1/4 px-4 py-2 font-bold text-left border border-r-slate-800 border-b-slate-800 border-t-slate-800 border-l-slate-800">Title:</td>
                                    <td className="w-3/4 px-4 py-2 text-left font-bold border border-t-slate-800 border-b-slate-800 border-r-slate-800">{feed.title}</td>
                                </tr>
                                <tr className="border border-b-slate-800 border-r-slate-800">
                                    <td className="w-1/4 px-4 py-2 font-bold text-left border border-r-slate-800 border-b-slate-800 border-l-slate-800">Category:</td>
                                    <td className="w-3/4 px-4 py-2 text-left">{feed.category}</td>
                                </tr>
                                <tr className="border border-b-slate-800 border-r-slate-800">
                                    <td className="w-1/4 px-4 py-2 font-bold text-left border border-r-slate-800 border-b-slate-800 border-l-slate-800">Creation Date:</td>
                                    <td className="w-3/4 px-4 py-2 text-left">{feed.createdAt}</td>
                                </tr>
                                <tr className="border border-b-slate-800 border-r-slate-800">
                                    <td className="w-1/4 px-4 py-2 font-bold text-left border border-r-slate-800 border-b-slate-800 border-l-slate-800">Status:</td>
                                    <td className="w-3/4 px-4 py-2 text-left">{feed.status}</td>
                                </tr>
                                <tr className="border border-b-slate-800 border-l-slate-800 border-r-slate-800">
                                    <td className="px-4 py-2 w-full" colSpan="2">
                                        <div className="flex justify-center gap-x-3">
                                            <Link to={{ pathname: `/view-in-details/${feed._id}` }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">View</Link>
                                            <Link to={{ pathname: `/edit-news-form/${feed._id}` }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Edit</Link>
                                            <button onClick={() => handleDelete(feed._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </div>
                        ))}
                    </tbody>
                </table>
            </div>


            <table className="hidden md:table w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="w-[20%] px-4 py-2">Title</th>
                        <th className="w-[20%] px-4 py-2">Category</th>
                        <th className="w-[30%] px-4 py-2">Creation Date</th>
                        <th className="w-[10%] px-4 py-2">Status</th>
                        <th className="w-[20%] px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sportNews.map(feed => (
                        <tr key={feed._id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{feed.title}</td>
                            <td className="border px-4 py-2">{feed.category}</td>
                            <td className="border px-4 py-2">{feed.createdAt}</td>
                            <td className="border px-4 py-2">{feed.status}</td>
                            <td className="flex justify-center gap-x-3 border px-4 py-2">
                                <Link to={{ pathname: `/view-in-details/${feed._id}` }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">View</Link>
                                {/* <Link to={{ pathname: `/edit-news-form/${feed._id}` }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Edit</Link>
                                <button onClick={() => handleDelete(feed._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NewsFeedTable;
