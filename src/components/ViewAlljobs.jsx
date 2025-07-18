import React from 'react'
import { Link } from 'react-router-dom'
const ViewAlljobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
        <Link to="jobs" className="block bg-gray-900 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
          View All Jobs
        </Link>
     </section>
  )
}

export default ViewAlljobs