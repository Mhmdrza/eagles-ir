import React from "react"
import Input from "../components/input"
import Layout from "../components/layout"
import '../styles/base.css'

export default function Index() {
  return <Layout>
    <h1 className="m-0">عقاب‌ها</h1>
    <p>جامعه پیشرفت فردی</p>
    <h2 className="">ماموریت چی هستیم؟</h2>
    <a href='/subscribers'>emails</a>
    <h3>پیوستن به ما</h3>
    <form action="/api/newsletter">
      <Input type='email' name='email' />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">ارسال</button>
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

// export async function getServerData(context) {
//   console.log(context)
//   return {
//     status: 200, // The HTTP status code that should be returned
//     props: {}, // Will be passed to the page component as "serverData" prop
//     headers: {}, // HTTP response headers for this page
//   }
// }