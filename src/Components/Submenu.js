import React from 'react'

function Submenu({ showSubMenu }) {
  return (
<div className={`rounded-2xl overflow-hidden submenu1 bg-white ${showSubMenu ? 'show' : ''}`}>
  
        <div className="submenu1-container-box flex justify-between">
        <div className="submenu1-containerBox">
          <h1>PLATFORM</h1>
          <div className="submenu1-container flex">
            <img src="https://webimages.mongodb.com/_com_assets/icons/atlas_product_family.svg" alt="" />
            <div >
              <h3 className="text-customColor8 font-medium">Atlas</h3>
              <p>Build on a developer data platform</p>
            </div>
          </div>
          <h1>PLATFORM SERVICES</h1>
          <div className="submenu1-container">
            <img src="https://webimages.mongodb.com/_com_assets/icons/atlas_database.svg" alt="" />
            <div>
              <h3 className="text-customColor8 font-medium">Database</h3>
              <p>Deploy a multi-cloud database</p>
            </div>
          </div>
          <div className="submenu1-container">
            <img src="https://webimages.mongodb.com/_com_assets/icons/atlas_search.svg" alt="" />
            <div>
              <h3 className="text-customColor8 font-medium">Search</h3>
              <p>Deliver engaging search experiences</p>
            </div>
          </div>
          <div className="submenu1-container">
            <img src="https://webimages.mongodb.com/_com_assets/icons/mdb_vector_search.svg" alt="" />
            <div>
              <h3 className="text-customColor8 font-medium">Vector Search</h3>
              <p>Design intelligent apps with GenAI</p>
            </div>
          </div>
          <div className="submenu1-container">
            <img src="https://webimages.mongodb.com/_com_assets/icons/atlas_stream_processing.svg" alt="" />
            <div>
              <h3 className="text-customColor8 font-medium">Stream Processing (Preview)</h3>
              <p>Unify data in motion and data at rest</p>
            </div>
          </div>
        </div>
        <div className="submenu1-containerBox">
          <h1>PLATFORM</h1>
          <div className="submenu1-container">
            <img src="https://webimages.mongodb.com/_com_assets/icons/mdb_compass.svg" alt="" />
            <div>
              <h3 className="text-customColor8 font-medium">Compass</h3>
              <p>Work with MongoDB data in a GUI</p>
            </div>
          </div>
          
          <div className="submenu1-container">
            <img src="https://webimages.mongodb.com/_com_assets/icons/atlas_integration.svg" alt="" />
            <div>
              <h3 className="text-customColor8 font-medium">Integrations</h3>
              <p>Integrations with third-party services</p>
            </div>
          </div>
          <div className="submenu1-container">
            <img src="https://webimages.mongodb.com/_com_assets/icons/mdb_migrator.svg" alt="" />
            <div>
              <h3 className="text-customColor8 font-medium">Relational Migrator</h3>
              <p>Migrate to MongoDB with confidence</p>
            </div>
          </div>
          <h1>SELF MANAGED</h1>
          <div className="submenu1-container">
            <img src="https://webimages.mongodb.com/_com_assets/icons/enterprise_advanced_product family.svg" alt="" />
            <div>
              <h3 className="text-customColor8 font-medium">Enterprise Advanced</h3>
              <p>Run and manage MongoDB yourself</p>
            </div>
          </div>
          <div className="submenu1-container">
            <img src="https://webimages.mongodb.com/_com_assets/icons/community_edition_product_family.svg" alt="" />
            <div>
              <h3 className="text-customColor8 font-medium">Community Edition</h3>
              <p>Develop locally with MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Submenu