import React from "react"
import Layout from "../components/layout"
import '../styles/base.css'

const SSRPage = ({ serverData }) => (
  <Layout>
    <h1>SSR Page with Dogs</h1>
    <img alt="Happy dog" src={serverData.message} />
  </Layout>
)

export default SSRPage


export function Head() {
  return (
    <>
      <title>SSR</title>
      <meta name="description" content="آموزش مقابله با کلاهبرداری" />
    </>
  )
}

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)

    if (!res.ok) {
      throw new Error(`Response failed`)
    }

    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {}
    }
  }
}