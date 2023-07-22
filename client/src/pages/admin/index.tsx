import '@s/main.css'
import 'react-toastify/dist/ReactToastify.css'

import React         from 'react'
import MyHead        from '@r/components/MyHead'
import MyNavbar      from '@c/Navbar'
import ProductForm   from '@r/components/ProductForm'
import MyFooter      from '@r/components/Footer'
import { raleway }   from '@c/fonts'
import { getCookie } from '@r/components/cookies'

const AdminDash = ({ email, access }: any) => {
  return (
    <>
      <MyHead title="Crazy Shop - Admin" />
      <MyNavbar
        font={ raleway }
        email={ email }
        access={ access }
        page='admin'
      />
      <ProductForm font={ raleway } />
      <MyFooter    font={ raleway } />
    </>
  )
}

export default AdminDash

export async function getServerSideProps ({ req }: any) {
  const token    = getCookie('token', req)
  const email     = getCookie('email', req)
  const access   = getCookie('access', req)

  if (typeof token == 'undefined') {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {
      email: email,
      access: access
    }
  }
}