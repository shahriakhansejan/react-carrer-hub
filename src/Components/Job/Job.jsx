import PropTypes from 'prop-types';
import { FaLocationDot } from 'react-icons/fa6';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className='text-start'>{company_name}</p>
                <div className='text-start'>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#5168ff]'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#5168ff]'>{job_type}</button>
                </div>
                <div className='my-4 flex gap-8'>
                    <h2 className='flex text-2xl items-center gap-2'><FaLocationDot></FaLocationDot> {location}</h2>
                    <h2 className='flex items-center text-2xl gap-2'><TbCurrencyTaka></TbCurrencyTaka> {salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {

};

export default Job;