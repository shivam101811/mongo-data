import React from 'react'
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function MongoDbUniversity() {
  return (
    <div className='container6 flex items-center flex-col'>
        <h1 className='container6-heading mb-20'>Learning MongoDB Starts Here:</h1>
        <div className="container6-box mb-10 font-light flex">
            <div className="flex flex-col container6-box1  shadow-md">
                <label className='block mb-6 font-bold' >MongoDB University</label> 
                <p>  <FontAwesomeIcon className='text-customColor5' icon={faCheck} /> Self-paced video lessons</p>
                <p><FontAwesomeIcon className='text-customColor5' icon={faCheck} /> On-demand labs</p>
                <p><FontAwesomeIcon className='text-customColor5' icon={faCheck} /> Certifications with digital badges</p>
                <button className='bg-customColor5 overflow-hidden mt-9'>View Courses</button>
            </div>
            <div className="flex flex-col  container6-box1 shadow-md">
                <label className='block font-bold mb-6'>Live Instructor-led Courses
</label>
<p><FontAwesomeIcon className='text-customColor5' icon={faCheck} /> Real-time interaction with instructor</p>
                <p><FontAwesomeIcon className='text-customColor5' icon={faCheck} /> Remote classes published regularly</p>
                <p><FontAwesomeIcon className='text-customColor5' icon={faCheck} /> On-site training also available</p>
                <button className='bg-customColor5 overflow-hidden mt-9'>Visit Instructor-Led Training Site</button>
            </div>
        </div>


        <p className='text-lg container6-text mb-9'>Looking for code examples or written tutorials? Visit our <button className='text-blue-900		hover:underline'>Developer Center</button> </p>
    </div>
  )
}

export default MongoDbUniversity




