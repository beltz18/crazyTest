import React            from 'react'
import Link             from 'next/link'
import Image            from 'next/image'
import { removeCookie } from './cookies'

const MyNavbar = ({ font, page, email, access }: any) => {
  const [showNav, setShowNav] = React.useState(false)

  const logout = () => {
    removeCookie('token')
    removeCookie('email')
    removeCookie('access')
  }

  return (
    <>
      <nav className={font.className+" bg-gray-800 dark:bg-white text-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 mb-10"}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/dashboard" className="flex items-center">
            <Image
              src="/andi-dev-logo.png"
              className="mr-3 rounded-full"
              alt="Flowbite Logo"
              width="50"
              height="50"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Crazy Shop</span>
          </Link>
          
          <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => { setShowNav(!showNav) }}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          <div className={`${!showNav ? "hidden" : ""} w-full md:block md:w-auto`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-white">
              <li key="home">
                <Link href="/" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" title=':)'>Home</Link>
              </li>
              <li key="dash">
                <Link href="/dashboard" className={`block py-2 pl-3 pr-4 ${page == 'home' ? "text-blue-500" : "text-white"} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} title='Go to dashboard'>Dashboard</Link>
              </li>
              <li key="cart">
                <Link href="/cart" className={`block py-2 pl-3 pr-4 ${page == 'cart' ? "text-blue-500" : "text-white"} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} title='Your cart'>Cart</Link>
              </li>
              <li key="user">
                {
                  access == 'admin'
                    ?
                  <Link href="/admin" className={`block py-2 pl-3 pr-4 ${page == 'admin' ? "text-blue-500" : "text-white"} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} title='Press here to register new products'>{ email }</Link>
                    :
                  <span className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" title='Your email'>{ email }</span>
                }
              </li>
              <li key="logout">
                <Link href="/login" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={ logout } title='Log out'>Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MyNavbar