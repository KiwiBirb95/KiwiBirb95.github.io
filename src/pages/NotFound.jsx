import React from 'react';
import { Link } from 'react-router-dom'; // if you're using react-router-dom

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', padding: '5rem' }}>
            <h1 style={{ fontSize: '5rem' }}>404</h1>
            <h2>Oops! Page not found.</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" style={{ textDecoration: 'none', color: '#3498db' }}>
                Go back home
            </Link>
        </div>
    );
};

export default NotFound;