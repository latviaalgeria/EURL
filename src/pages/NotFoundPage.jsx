import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4 text-gray-700">Page Not Found</p>
      <p className="mt-2 text-gray-500">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
