import React from "react"
import { NewLetterCollection, _NewsLetter_ } from "../../api/seed"
import Input from "../components/input"
import Layout from "../components/layout"
import { executeQuery, q } from "../db/fauna"
import { NewsLetterDoc } from "../db/models"
import '../styles/base.css'

export default function Index({ serverData: {emailList = []} }) {
  console.log({emailList})
  return <Layout>
    <h1 className="m-0">ایمیل‌های ثبت شده</h1>
    <ul>
      {emailList.map((email:string) => <li key={email}>{email}</li>)}
    </ul>
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

export async function getServerData(context) {
  // console.log(context);
  const emailList = await executeQuery(q.Map(q.Paginate(q.Match(q.Index(_NewsLetter_))), (x)=>q.Get(x)));
  console.log()
  return {
    status: 200, // The HTTP status code that should be returned
    props: {
      emailList: emailList.data.map((newsLetterDocument: NewsLetterDoc) => newsLetterDocument.data.email )
    }, // Will be passed to the page component as "serverData" prop
    headers: {
    }, // HTTP response headers for this page
  }
}