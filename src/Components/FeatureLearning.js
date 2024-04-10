import React from 'react'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function FeatureLearning() {
  return (
    <div>
       <div className="container3   mx-2">
    <div className="container3-header px-10  flex justify-between my-10">
        <h1 className='text-4xl font-semibold text-customColor'>Featured Learning</h1>
        <button className='font-light'>See All Content               <FontAwesomeIcon icon={faArrowRightLong} />
</button>
    </div>

    <div className="flex flex-wrap container3-data">

        <div className="conatiner3-box">
            <img className='contianer3-img' src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_750,h_361/v1/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/mrpfyadvg7c1-MongoDBBasics_Catalog1.png" alt="" />
            <div className="data-container">
            <label htmlFor="" className='text-customColor3 font-normal text-2xl'>Introduction to MongoDB</label>
            <p className='font-light pt-5 pb-4 '>You'll be guided through the foundational skills and knowledge you need to get started with MongoDB. </p>
            </div>
           
        </div>

        <div className="conatiner3-box">
            <img className='contianer3-img' src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_750,h_361/v1/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/asoskt3qiiia-AtlasEssentials_Course.png" alt="" />
            <div className="data-container">
            <label htmlFor="" className='text-customColor3 font-normal text-2xl'>Atlas Essentials</label>
            <p className='font-light pt-5 pb-4 '>This course guides you through the foundational knowledge and skills needed to use MongoDB Atlas.  </p>
            </div>
           
        </div>


        <div className="conatiner3-box">
            <img className='contianer3-img' src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_750,h_361/v1/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/cqdh2yvgc5ln-DataModeling_LP.png" alt="" />
            <div className="data-container">
            <label htmlFor="" className='text-customColor3 font-normal text-2xl'>MongoDB Data Modeling Path</label>
            <p className='font-light pt-5 pb-4 '>This course guides you through the foundational steps of creating an effective data model in MongoDB.</p>
            </div>
           
        </div>



        <div className="conatiner3-box">
            <img className='contianer3-img' src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_750,h_361/v1/course-uploads/ae62dcd7-abdc-4e90-a570-83eccba49043/atbemp36g4a3-DBALearningPathCatalog.png" alt="" />
            <div className="data-container">
            <label htmlFor="" className='text-customColor3 font-normal text-2xl'>Self-Managed Database Admin</label>
            <p className='font-light pt-5 pb-4 '>This learning path contains a series of units to help you, as a Database Administrator, learn MongoDB knowledge and skills. </p>
            </div>
           
        </div>




      


    </div>
    
 </div>


 
    </div>
  )
}

export default FeatureLearning