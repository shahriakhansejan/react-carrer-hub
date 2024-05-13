import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('Your application submitted Successfully')
    }

    return (
        <div>
            <h2>Job details of: {job.job_title}</h2>

            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border md:col-span-3'>
                    <h2 className='text-4xl'>Details Coming here</h2>
                    
                    </div>
                    <div className='border'>
                        <h3>Side things</h3>
                        <button
                        onClick={handleApplyJob} className='btn btn-primary w-full'>Apply now</button>

                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

JobDetails.propTypes = {
    
};

export default JobDetails;