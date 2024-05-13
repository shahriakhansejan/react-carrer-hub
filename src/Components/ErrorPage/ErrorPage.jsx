import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center my-28'>
            <h2 className='text-4xl text-red-700 font-bold'>Oops!!!</h2>
            <p className='text-xl my-8'>There were no Data Found</p>
            <Link to='/'><button className='bg-green-700 hover:bg-green-900 font-bold text-xl px-5 py-3 text-white rounded-lg mt-12'>Go Home</button></Link>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;