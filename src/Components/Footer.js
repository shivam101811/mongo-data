import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow , faLinkedin , faYoutube , faXTwitter , faTwitch, faFacebook} from '@fortawesome/free-brands-svg-icons';


function Footer() {

  return (
    <>
    <div className='bg-customColor9 container10 flex items-center justify-center flex-col'>
    <div className="innerContainer10 flex justify-between flex-wrap">
      <div className="container10-row ">
        <img src="https://webimages.mongodb.com/_com_assets/cms/kuyj3d95v5vbmm2f4-horizontal_white.svg?auto=format%252Ccompress" alt="" />
      </div>
      <div className="container10-row flex flex-col text-white gap-y-6">
        <h3 className='font-extrabold'>About</h3>
        <span className='hover:underline cursor-pointer'>Careers</span>
        <span className='hover:underline cursor-pointer'>Investor Relations</span>
        <span className='hover:underline cursor-pointer'>Legal Notices</span>
        <span className='hover:underline cursor-pointer'>Privacy Notices</span>
        <span className='hover:underline cursor-pointer'>Security Information</span>
        <span className='hover:underline cursor-pointer'>Trust Center</span>
        <span className='hover:underline cursor-pointer'>Trust Center</span>
      </div>
      <div className="container10-row flex flex-col text-white gap-y-6">
        <h3 className='font-extrabold'>Support</h3>
        <span className='hover:underline cursor-pointer'>Contact Us</span>
        <span className='hover:underline cursor-pointer'>Customer Portal</span>
        <span className='hover:underline cursor-pointer'>Atlas Status</span>
        <span className='hover:underline cursor-pointer'>Customer Support</span>
        <span className='hover:underline cursor-pointer'>Manage Cookies</span>
      </div>
      <div className="container10-row flex flex-col text-white row gap-y-6">
        <h3 className='font-extrabold'>Social </h3>
        <span className='hover:underline cursor-pointer'> <FontAwesomeIcon icon={faCodeBranch} className='mr-2'/> GitHub</span>
        <span className='hover:underline cursor-pointer'><FontAwesomeIcon icon={faStackOverflow} className='mr-2'/> Stack Overflow</span>
        <span className='hover:underline cursor-pointer'><FontAwesomeIcon icon={faLinkedin} className='mr-2'/> LinkedIn</span>
        <span className='hover:underline cursor-pointer'><FontAwesomeIcon icon={faYoutube} className='mr-2'/> YouTube</span>
        <span className='hover:underline cursor-pointer'><FontAwesomeIcon icon={faXTwitter} className='mr-2'/> X</span>
        <span className='hover:underline cursor-pointer'><FontAwesomeIcon icon={faTwitch} className='mr-2'/> Twitch</span>
        <span className='hover:underline cursor-pointer'><FontAwesomeIcon icon={faFacebook} className='mr-2'/> Facebook</span>
      </div>
    </div>
    <div className='footer text-white font-light text-left bg-customColor9 mb-9'>© 2024 MongoDB, Inc.</div>
  </div>
  
  </>
    
  
  )
}

export default Footer




// MongoDB logo
// © 2024 MongoDB, Inc.
// 

// 
// 
// 
// 
// 
// 
// 

// 
// 
// 
// 
//

// Social

// GitHub
// Stack Overflow
// LinkedIn
// YouTube
// X
// Twitch
// Facebook