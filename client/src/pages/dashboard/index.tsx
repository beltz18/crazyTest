import '@s/main.css'

import React        from 'react'
import MyHead       from '@c/MyHead'
import MyNavbar     from '@c/Navbar'
import MyFeed       from '@c/Feed'
import MyFooter     from '@r/components/Footer'
import { raleway }  from '@c/fonts'

const Dashboard = () => {  
  return (
    <>
      <MyHead title="Crazy Shop - Home"      />
      <MyNavbar font={ raleway } page='home' />
      <MyFeed   font={ raleway }             />
      <MyFooter font={ raleway }             />
    </>
  )
}

export default Dashboard