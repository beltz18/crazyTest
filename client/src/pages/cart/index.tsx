import '@s/main.css'
import 'react-toastify/dist/ReactToastify.css'

import React         from 'react'
import MyHead        from '@c/MyHead'
import MyNavbar      from '@c/Navbar'
import MyCart        from '@c/Cart'
import MyFooter      from '@c/Footer'
import { raleway }   from '@c/fonts'
import { getCookie } from '@r/components/cookies'

const Cart = ({ email, access, items }: any) => {
  return (
    <>
      <MyHead title="Crazy Shop - Cart" />
      <MyNavbar
        font={ raleway }
        email={ email }
        access={ access }
        page='cart'
      />
      <MyCart
        items={ items }
        email={ email }
      />
      <MyFooter font={ raleway } />
    </>
  )
}

export default Cart

export async function getServerSideProps ({ req }: any) {
  const token    = getCookie('token', req)
  const email    = getCookie('email', req)
  const access   = getCookie('access', req)

  const items = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_CART_GET}`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: email })
  })
    .then(res => res.json())

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
      access: access,
      items: items
    }
  }
}