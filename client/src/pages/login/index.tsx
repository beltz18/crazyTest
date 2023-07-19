import React from 'react'

const index = ({ title }: any) => {
  return (
    <>
      <h1>Hello { title }</h1>
    </>
  )
}

export default index

export async function getServerSideProps () {
  return {
    props: {
      title: 'Login'
    }
  }
}