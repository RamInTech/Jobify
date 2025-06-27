import React from 'react'
import {Route , createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import JobPages from './pages/JobPages';
import NotFound from './pages/NotFound';
import JobPage , {jobLoader} from './pages/JobPage';
import AddJob from './pages/AddJob';
import EditJobPage from './pages/EditJobPage';



const App = () => {

  const addJob = async (newJob)=>{
    const res = await fetch('/api/jobs' , {
      method : 'POST',
      headers :{
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(newJob),
    });
    return;
  }

  const deleteJob = async(id)=>{
    console.log(id);
    const res = await fetch(`/api/jobs/${id}`,{
      method : 'DELETE'
    });
    return;
  }

  const updateJob = async(job)=>{
      const res = await fetch(`/api/jobs/${job.id}` , {
      method : 'PUT',
      headers :{
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element ={<Homepage />} />
        <Route path='/jobs' element={<JobPages />} />
        <Route path='/add-job' element={<AddJob addJobSubmit={addJob} />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}/>
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return (

    
    <RouterProvider router={router} />
  )
};

export default App
