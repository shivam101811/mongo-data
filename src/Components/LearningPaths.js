import React from 'react'

function LearningPaths() {
  return (
    <div className='flex items-center py-40 container5 justify-between'>
        <div className="container5-1 flex flex-col">
            <h1 className='mb-8'>Interactive Learner Journey</h1>
            <p className='font-light'>
                Our new Learner Journey can serve as a tool for your learning by providing a 'roadmap' of suggested courses to take based on your particular learning needs.

            </p>
            <button className='bg-customColor5 mt-9 container5-btn'>View Learner Journey</button>
        </div>

        <div className="container5-2 border-2 border-solid overflow-hidden">
            <img className='' src="https://cdn-ti.learn.mongodb.com/pages-data/misc-assets/lj-entry-demo.gif" alt="" />
        </div>
    </div>
  )
}

export default LearningPaths