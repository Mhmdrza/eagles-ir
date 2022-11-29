import React from "react"
import Input from "../components/input"
import Layout from "../components/layout"
import '../styles/base.css'

export default function Index() {
  return <Layout>
    <h1 className="m-0">عقاب‌ها</h1>
    <p>جامعه پیشرفت فردی</p>
    <h2 className="">ماموریت چی هستیم؟</h2>
    <h3>پیوستن به ما</h3>
    <form action="/api/newsletter">
      <Input type='email' name='email' />
    </form>
  </Layout>
}


export function Head() {
  return (
    <>
      <title>عقاب‌ها</title>
      <meta name="description" content="آموزش مقابله با کلاهبرداری" />
    </>
  )
}