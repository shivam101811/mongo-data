// Header.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsisVertical, faBars , faChevronRight} from '@fortawesome/free-solid-svg-icons';
import SubMenu from './Submenu'; // Import the SubMenu component

function Header() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false); // State to control the visibility of the side navigation bar

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <>
      <div className="headerbox flex z-50 relative">
        <div>
          <img className="headerimg" src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" alt="MongoLogo" />
        </div>
        <div className="headerbox1 flex w-full justify-between text-customColor items-center font-light">
          <div className="headerbox2-1">
            <a className="px-x-20 relative" href="#" onClick={toggleSubMenu}>
              <button className='hover:text-customColor4'>Products <FontAwesomeIcon icon={faAngleDown} /></button>
              {/* Use the SubMenu component here */}
              <SubMenu showSubMenu={showSubMenu} />
            </a>
            <a className="px-x-20 relative" href="#" ><button className='hover:text-customColor4'>Resources <FontAwesomeIcon icon={faAngleDown} /></button></a>
            <a className="px-x-20" href="#"><button className='hover:text-customColor4'>Solutions <FontAwesomeIcon icon={faAngleDown} /></button></a>
            <a className="px-x-20" href="#"><button className='hover:text-customColor4'>Company <FontAwesomeIcon icon={faAngleDown} /></button></a>
            <a className="px-x-20" href="#"><button className='hover:text-customColor4'>Pricing</button></a>
          </div>
          <div className="headerbox2-2 text-center">
            <a href="#" className="icon1 block "><button className='hover:text-customColor4'>SignIn</button></a>
            <FontAwesomeIcon icon={faEllipsisVertical} className='icon2 hidden' />
            <FontAwesomeIcon icon={faBars} className='icon3 hidden' onClick={toggleSideNav} /> {/* Toggle side nav on click */}
          </div>
        </div>
      </div>

      {/* Side Navigation Bar */}
      <div className={`flex flex-col text-customColor6 bg-white h-full w-64 fixed pt-20 top-0 right-0 z-30 transition-transform duration-300 ease-in-out transform ${showSideNav ? 'translate-x-0' : 'translate-x-full' }`}>
      <a className="my-2 px-x-20 relative flex justify-between" href="#" >
              <button className='hover:text-customColor4'>Products </button><FontAwesomeIcon icon={faChevronRight} />
              {/* Use the SubMenu component here */}
              <SubMenu showSubMenu={showSubMenu} />
            </a>
            <a className="my-2 px-x-20 flex justify-between" href="#"><button className='hover:text-customColor4'>Resources </button><FontAwesomeIcon icon={faChevronRight} /></a>
            <a className="my-2 px-x-20 flex justify-between" href="#"><button className='hover:text-customColor4'>Solutions </button><FontAwesomeIcon icon={faChevronRight} /></a>
            <a className="my-2 px-x-20 flex justify-between" href="#"><button className='hover:text-customColor4'>Company </button><FontAwesomeIcon icon={faChevronRight} /></a>
            <a className="my-2 px-x-20" href="#"><button className='hover:text-customColor4'>Pricing</button></a>
</div>




        
    </>
  );
}

export default Header;
