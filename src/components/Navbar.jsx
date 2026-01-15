import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
        <div className='h-16 pl-6 pr-6 pt-4 pb-4 shadow-md flex justify-between items-center  bg-white '>
            <div className='flex flex-col items-start w-full'>
                <h1 className='font-bold flex text-blue-400 text-lg justify-'>Fuse PDF</h1> 
                <span className='flex text-sm text-gray-500'>Merge PDFs securely in your browser </span>
            </div>
            <div className='flex text-sm gap-4 font-semibold text-gray-500'>
              <button className='text-nowrap'>
                How it works
              </button>
              <button className='text-nowrap'>
                About
              </button>

            </div>
        </div>
    </div>
  )
}

export default Navbar