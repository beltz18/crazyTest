import React from 'react'
import Link  from 'next/link'

const MyFooter = ({ font }: any) => {
  const links = [
    {
      name: 'Website',
      url: 'https://tidv.tech/AndiDev'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/beltz18'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/andi-montilla-602b57246'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@AndiDev18'
    },
  ]

  return (
    <>
      <footer className={font.className+" bg-gray-800 w-full shadow dark:bg-white"}>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/dashboard" className="flex items-center mb-4 sm:mb-0">
              <img src="./andi-dev-logo.png" className="h-10 mr-3 rounded-full" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Crazy shop</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              { links.map(({ name, url }) => (
                <li key={ name }>
                  <Link
                    href={ url }
                    className="mr-4 hover:underline md:mr-6 text-white"
                    target='_blank'
                  >
                    { name }
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-center text-white">
            Created by&nbsp;
            <Link href="https://tidv.tech/AndiDev" className="hover:underline text-gray-400" target='_blank'>
              Andi Dev
            </Link>.&nbsp;
            2023 &nbsp;
          </span>
        </div>
      </footer>
    </>
  )
}

export default MyFooter