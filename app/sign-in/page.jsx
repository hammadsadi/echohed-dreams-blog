'use client'
import toastAlert from '@/helper/toastAlert';
import Link from 'next/link';
import React from 'react'

const SignIN = () => {

        // handleSubmitAuthForm
        const handleSubmitAuthForm = async(e)=>{
            e.preventDefault()
            const form = e.target 
            const email = form.email.value
            const password = form.password.value
            // Validate
            if(!email || !password) return toastAlert('error', 'All Fileds Are Required!')
            console.log({ email, password})
        }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-800 bg-white shadow border">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmitAuthForm} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="sadi@.com"
                className="w-full px-3 py-2 border rounded-md border-[#eee] outline-none bg-[#eee] text-gray-800 focus:border-primary-500 focus:bg-white"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-800"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-[#eee] outline-none bg-[#eee] text-gray-800 focus:border-primary-500 focus:bg-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-teal-600 hover:bg-primary-700 text-white"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-800">
              Don't have an account yet? &nbsp;
              <Link
                rel="noopener noreferrer"
                href="/sign-up"
                className="hover:underline text-primary-600"
              >
                Sign up
              </Link>
            
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIN