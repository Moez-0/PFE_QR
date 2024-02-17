import React from 'react';
import { useState } from 'react';
import { Link , useNavigate } from "react-router-dom";

const Login = () => {
  return (

    <div className=' min-h-screen min-w-full bg-white dark:bg-slate-950 flex  flex-col items-center justify-center '>
        <div className='flex flex-col items-center justify-center w-[400px] h-[600px] bg-slate-950 dark:bg-white rounded-xl' >
            <div className='flex items-center w-full h-[20%] justify-center'>
        <Link to='/' className='text-2xl font-bold cursor-pointer '> <span className=' text-main dark:font-medium'>BOX</span><span className='text-main font-medium dark:font-bold'>HERO</span> </Link>
            </div>
        <div className=' flex-1 h-[80%]  flex flex-col items-center'>
        <h1 className='font-bold text-2xl mb-5 text-white dark:text-slate-950'>Login</h1>
        <form className='flex flex-col items-center justify-center space-y-5' >
        <input type='email' name='email' placeholder='Email'  className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600'/>

        <p className='text-red-600'>Email is required</p>
        <input type='password' name='password'  placeholder='Password' className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600'/>
        <p className='text-red-600' >Password is required</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md'>Login</button>

        </form>
        <p className='mt-5 text-white dark:text-slate-950'>Don't have an account? <Link to='/signup' className='text-blue-600'>Signup</Link></p>
        </div>
        </div>
    </div>
  )
}

export default Login