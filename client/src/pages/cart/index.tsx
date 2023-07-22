import '@s/main.css'

import React         from 'react'
import MyHead        from '@c/MyHead'
import MyNavbar      from '@c/Navbar'
import MyCart        from '@c/Cart'
import MyFooter      from '@c/Footer'
import { raleway }   from '@c/fonts'
import { getCookie } from '@r/components/cookies'

const Cart = ({ email, access }: any) => {
  return (
    <>
      <MyHead title="Crazy Shop - Cart" />
      <MyNavbar
        font={ raleway }
        email={ email }
        access={ access }
        page='cart'
      />
      <MyCart email={ email } />
      <MyFooter font={ raleway } />
    </>
  )
}

export default Cart

export async function getServerSideProps ({ req }: any) {
  const token    = getCookie('token', req)
  const email    = getCookie('email', req)
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