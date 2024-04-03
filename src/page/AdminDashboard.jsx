// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [activeItem, setActiveItem] = useState("/"); // Default active item
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname); // Update active item when location changes
  }, [location]);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-slate-400">NEWS</span>
        </Link>
        <NavLink to="/admin-main-page">All News</NavLink>
        <NavLink to="/form">Add News</NavLink>
      </div>
      <div className="flex items-center">
        <NavLink to="/">Logout</NavLink>
        <h1 className="h-8 w-8 font-bold pt-[3px] rounded-[50%] border border-white text-center ml-4" >S</h1>
      </div>
    </nav>
  );

  function NavLink({ to, children }) {
    const isActive = activeItem === to || (activeItem === "/" && to === "/all-news");
    return (
      <Link
        to={to}
        className={`ml-4 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
        onClick={() => setActiveItem(to)}
      >
        {children}
      </Link>
    );
  }
}

export default Navbar;
