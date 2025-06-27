import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
const HeroCard = () => {
  return (
    <section className="py-4 px-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
                <h2 className="text-2xl font-bold"> For Jobseekers</h2>
                <p className="mt-2 mb-4">Explore top tech jobs and kickstart your career today</p>
                <Link to="/jobs" className="inline-block bg-indigo-900 text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                    Browse Jobs 🔎
                </Link>
            </Card>

            <Card bg="bg-indigo-50">
              <h2 className="text-2xl font-bold">For Recruiters</h2>
              <p className="mt-2 mb-4">List your role, hire the best in tech</p>
              <Link to="/add-job" className="inline-block bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-800">
                Post Job 🚀
              </Link>
            </Card>
          </div>
        </div>
    </section>
  )
}

export default HeroCard