import '@s/main.css'

import React         from 'react'
import MyHead        from '@c/MyHead'
import MyNavbar      from '@c/Navbar'
import MyFeed        from '@c/Feed'
import MyFooter      from '@r/components/Footer'
import { raleway }   from '@c/fonts'
import { getCookie } from '@r/components/cookies'

const Dashboard = ({ products, email, access }: any) => {
  return (
    <>
      <MyHead title="Crazy Shop - Home" />
      <MyNavbar
        font={ raleway }
        email={ email }
        access={ access }
        page='home'
      />
      <MyFeed
        font={ raleway }
        products={ products }
      />
      <MyFooter font={ raleway } />
    </>
  )
}

export default Dashboard

export async function getServerSideProps ({ req }: any) {
  const token    = getCookie('token', req)
  const email    = getCookie('email', req)
  const access   = getCookie('access', req)

  const products = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PRODUCT_GET}`)
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
      products: products,
      email: email,
      access: access
    }
  }
}