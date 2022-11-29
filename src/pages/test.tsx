import React from "react"
import Layout from "../components/layout"
import '../styles/base.css'

export default function Index() {
  return <Layout>
    <h1 className="m-0">SSR</h1>
    test
  </Layout>
}


export function Head() {
  return (
    <>
      <title>SSR</title>
      <meta name="description" content="آموزش مقابله با کلاهبرداری" />
    </>
  )
}

export async function getServerData(context) {
  console.log(context)
  return {
    status: 200, // The HTTP status code that should be returned
    props: {}, // Will be passed to the page component as "serverData" prop
    headers: {}, // HTTP response headers for this page
  }
}