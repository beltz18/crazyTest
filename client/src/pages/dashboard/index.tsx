import '@s/main.css'

import React        from 'react'
import MyHead       from '@c/MyHead'
import MyNavbar     from '@c/Navbar'
import MyFeed       from '@c/Feed'
import MyFooter     from '@r/components/Footer'
import { raleway }  from '@c/fonts'

const Dashboard = ({ products }: any) => {  
  return (
    <>
      <MyHead title="Crazy Shop - Home"                />
      <MyNavbar font={ raleway } page='home'           />
      <MyFeed   font={ raleway } products={ products } />
      <MyFooter font={ raleway }                       />
    </>
  )
}

export default Dashboard

export async function getServerSideProps () {
  const products = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PRODUCT_GET}`)
    .then(res => res.json())

  return {
    props: {
      products: products
    }
  }
}