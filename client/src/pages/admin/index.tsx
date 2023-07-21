import '@s/main.css'
import 'react-toastify/dist/ReactToastify.css'

import React       from 'react'
import MyHead      from '@r/components/MyHead'
import MyNavbar    from '@c/Navbar'
import ProductForm from '@r/components/ProductForm'
import MyFooter    from '@r/components/Footer'
import { raleway } from '@c/fonts'

const AdminDash = () => {
  return (
    <>
      <MyHead title="Crazy Shop - Admin"        />
      <MyNavbar    font={ raleway } page='home' />
      <ProductForm font={ raleway }             />
      <MyFooter    font={ raleway }             />
    </>
  )
}

export default AdminDash