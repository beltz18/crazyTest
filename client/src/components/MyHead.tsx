import Head from "next/head"

const MyHead = ({ title }: any) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
    </>
  )
}

export default MyHead