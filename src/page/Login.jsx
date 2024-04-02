// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// const LoginPage = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const navigate = useNavigate();
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://news-app-backend-lac.vercel.app/api/login', formData);
//             const token = response.data.token;
//             document.cookie = `token=${token}; path=/; max-age=${60 * 60}; SameSite=Strict`;
//             navigate('/');
//             // Redirect to dashboard or show success message
//         } catch (error) {
//             console.error('Error logging in:', error);
//             setError('Invalid email or password. Please try again.');
//         }
//     };

//     return (
//         <div className="container mx-auto mt-10 px-4">
//             <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//             <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
//                     <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
//                     <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
//                 </div>
//                 <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">Login</button>
//                 {error && <p className="text-red-500 mt-2">{error}</p>}
//             </form>
//             <p className="mt-4 text-sm text-center">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up here</Link></p>
//         </div>
//     );
// }

// export default LoginPage;







// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const navigate = useNavigate();
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://news-app-backend-lac.vercel.app/api/login', formData);
//             const token = response.data.token;
//             document.cookie = `token=${token}; path=/; max-age=${60 * 60}; SameSite=Strict`;
//             console.log('Token:', token);
    
//             // Set the token in the Authorization header for subsequent requests
//             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
//             // Now make the request to fetch user data
//             const userResponse = await axios.get('https://news-app-backend-lac.vercel.app/api/user');
//             console.log('User response:', userResponse);
//             const { role } = userResponse.data;
//             if (role) {
//                 navigate('/admin-main-page');
//             } else {
//                 navigate('/all-news');
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             setError('Invalid email or password. Please try again.');
//         }
//     };

//     return (
//         <div className="container mx-auto mt-10 px-4">
//             <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//             <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
//                     <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
//                     <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
//                 </div>
//                 <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">Login</button>
//                 {error && <p className="text-red-500 mt-2">{error}</p>}
//             </form>
//             <p className="mt-4 text-sm text-center">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up here</Link></p>
//         </div>
//     );
// }

// export default LoginPage;













import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');

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
            const response = await axios.post('https://news-app-backend-lac.vercel.app/api/login', formData);
            const token = response.data.token;
            document.cookie = `token=${token}; path=/; max-age=${60 * 60}; SameSite=Strict`;
            console.log('Token:', token);
    
            // Set the token in the Authorization header for subsequent requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
            // Now make the request to fetch user data
            const userResponse = await axios.get('https://news-app-backend-lac.vercel.app/api/user');
            console.log('User response:', userResponse);
            const { role } = userResponse.data;
            if (role) {
                navigate('/admin-main-page');
            } else {
                navigate('/all-news');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="container mx-auto mt-10 px-4">
            <p className="text-red-500 mb-4 text-center">You must login to continue as Admin</p>
            <p className="mb-4 text-center">Admin Credentials: email: admin@gmail.com, password: Admin@123</p>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">Login</button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
            <p className="mt-4 text-sm text-center">
                Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up here</Link>
                <br />
                <Link to="/all-news" className="text-blue-500 hover:underline">Continue as viewer</Link> <span className="text-red-500">(Without Login)</span>
            </p>
        </div>
    );
}

export default LoginPage;
