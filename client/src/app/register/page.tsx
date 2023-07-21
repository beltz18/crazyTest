"use client"

import '@s/main.css'
import 'react-toastify/dist/ReactToastify.css'
import Link                      from 'next/link'
import { redirect }              from 'next/navigation'
import { Button, TextInput }     from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState }   from 'react'

const RegisterPage = () => {
  const [redir, setRedir] = useState(false)
  const regexEmail        = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  const regexPass         = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
  const notifyError: any  = (msg: string) => toast.error(msg)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const user = {
      user: {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        access: "user"
      }
    }

    if(!user.user.email.match(regexEmail)) notifyError(`
      The email cannot:
      start or finish with a dot, contain spaces into
      the string or contain special chars (<:, *, etc).
    `)

    else if(!user.user.password.match(regexPass)) notifyError(`
      Password must be 8-16 characters with no space
      and contain: 1 number, 1 uppercase letter, 1
      lowercase letter and 1 non-alpha numeric number.
    `)

    else {
      const post = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_USER_REG}`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      const res  = await post.json()
      if (res.status != 201) notifyError(res.message)
      else setRedir(true)
    }
  }

  useEffect(() => { if (redir) redirect('/login') }, [redir])

  return (
    <>
      <div className="min-h-screen bg-gray-500 py-6 flex flex-col justify-center xs:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto content">
          <ToastContainer />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto flex flex-col">
              <div>
                <h1 className="text-2xlg font-semibold text-center">Sign Up</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form className="py-8 text-base leading-6 space-y-4 text-gray-700 flex flex-col sm:text-lg sm:leading-7" onSubmit={ handleSubmit }>
                  <div>
                    <TextInput
                      type="text"
                      name="name"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div>
                    <TextInput
                      type="email"
                      name="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div>
                    <TextInput
                      type="password"
                      name="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-5"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <Button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">
                    Create account
                  </Button>
                </form>
              </div>
              <Link className='m-auto' href="/login">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage