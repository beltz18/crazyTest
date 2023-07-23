"use client"

import '@s/main.css'
import Link  from 'next/link'
import Image from 'next/image'

export default function Home() {
  fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`, { method: 'GET' })

  return (
    <>
      <div className='min-h-screen bg-gray-500 py-6 flex flex-col justify-center items-center xs:py-12'>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10 px-8 pt-8">
            <Image
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/andi-dev-logo.png"
              alt="Andi Dev"
              width="50"
              height="50"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Andi Dev</h5>
            <span className="text-gray-500 text-justify my-2 dark:text-gray-400">
              As a Full Stack Developer, I&apos;m responsible of designing and implementing
              user-friendly interfaces using Next.js, while also I build efficient and reliable
              server-side APIs with Node.js.
            </span>

            <span className="text-gray-500 text-justify my-2 dark:text-gray-400">
              This project will provide you with an excellent platform to showcase my abilities
              in building responsive web applications, handling data management, and integrating
              APIs.
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link href="/dashboard" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to Dashboard</Link>
              <Link href="/login" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Go to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}