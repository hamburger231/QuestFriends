'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

export default function LoginPage() {
  const router = useRouter()

  const skipToMain = () => {
    router.push('/strona-glowna')
  }

  return (
    <>
    <div onClick={skipToMain} className='fixed w-full h-full top-0 bg-opacity-100 bg-black z-50'>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome to</h2>
              <h1 className="mt-2 text-4xl font-extrabold text-purple-600">Friends Quest</h1>
            </div>
            <div className="mt-8 space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">+48</span>
                </div>
                <input
                  type="tel"
                  required
                  className="block w-full pl-12 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <button
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <Image src="/google-icon.png" alt="Google" width={20} height={20} className="mr-2" />
                  Continue with Google
                </button>
              </div>
              <div>
                <button
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <Image src="/apple-icon.png" alt="Apple" width={20} height={20} className="mr-2" />
                  Continue with Apple
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <h1  onClick={skipToMain} style={{textAlign:"center",color:"white",height:"100%", width: "100%",top:"50%" ,padding:"25%", backgroundColor: "rgba(0,0,0,0.9)",position: 'fixed', left: '50%', zIndex: '1000', transform:"translate(-50%, -50%)", fontWeight:"700", fontSize: "30px"}}>loggin is skiped this due to beeing POC<br/><br/>Press to Continue</h1>
    </>
    
  )
}