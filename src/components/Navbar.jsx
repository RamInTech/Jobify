import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const linkclass =  ({isActive})=>(
    isActive ? 'bg-gray-200 text-black rounded-md px-3 py-2'
    : 'text-white hover:bg-gray-400 hover:text-black rounded-md px-3 py-2'
  )

  return (
    <nav className="bg-customblue border-b border-gray-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-12 w-auto" src="../Jobify.png" alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  Jobify
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2 ">
                  <NavLink to="/" className={linkclass}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={linkclass}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={linkclass}>
                    Post Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar