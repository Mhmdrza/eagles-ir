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
