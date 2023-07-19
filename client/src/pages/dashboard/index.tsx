import '@s/main.css'
import React       from 'react'
import MyHead      from '@c/MyHead'
import { raleway } from '@c/fonts'

const Dashboard = ({ title }: any) => {
  return (
    <>
      <MyHead title="crazyTest" />
      <h1 className={raleway.className}>Hello, { title }</h1>
      <p className={raleway.className}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At in omnis reprehenderit magni inventore architecto odio
        ullam necessitatibus, ex dolorem quo beatae atque deleniti
        minus eius ea quibusdam dolorum modi? 2023
      </p>
    </>
  )
}

export default Dashboard

export async function getServerSideProps () {
  return {
    props: {
      title: 'Dashboard'
    }
  }
}