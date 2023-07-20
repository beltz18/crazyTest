import '@s/main.css'

import React       from 'react'
import MyHead      from '@c/MyHead'
import MyNavbar    from '@c/Navbar'
import MyFeed      from '@c/Feed'
import MyFooter    from '@r/components/Footer'
import { raleway } from '@c/fonts'

const Dashboard = () => {
  return (
    <>
      <MyHead title="crazyTest"  />
      <MyNavbar font={ raleway } />
      <MyFeed   font={ raleway } />
      <MyFooter font={ raleway } />
    </>
  )
}

export default Dashboard