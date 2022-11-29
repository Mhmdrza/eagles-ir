import React from "react"
import '../styles/base.css'

export default function Index() {
  return <div>
    <h1 className="m-2">عقاب‌ها</h1>
    <p className="p-5"></p>
    <h2 className="p-4 m-5">دنبال چی هستیم؟</h2>
    <ul>
      <li>بالا بردن آگاهی عمومی</li>
      <li>آموزش روش&zwnj;های مقابله با کلاهبرداری</li>
      <li>افزایش دانش حقوقی و قضایی</li>
      <li>سخت کردن  کار کلاهبرداران</li>
    </ul>
    <h2>از چه طریقی؟</h2>
    <ol>
      <li>شرح داستان&zwnj;های کلاهبرداری که برای افراد رخ داده</li>
      <li>انتشار تجربه&zwnj;هایی که فرد از آن بدست آورده</li>
      <li>آموزش نکات عملی برای مقابله اون روش کلاه برداری</li>
    </ol>
    <h2>کجا فعالیت میکنیم؟</h2>
    <ul>
      <li><a href="https://www.instagram.com/kolahban/">اینستاگرام <small>(kolahban@)</small></a></li>
      <li><a href="https://t.me/kolahban">تلگرام <small>(kolahban@)</small></a></li>
      <li><a href="https://www.youtube.com/channel/UCmjmFq8L41OLyRxOPGoLUUA">یوتوب</a></li>
    </ul>
    <h2>شما چه طوری میتونید به ما کمک کنید؟</h2>
    <ul>
      <li>فرستادن داستان&zwnj;های کلاهبرداری که برای خودتون رخ داده</li>
      <li>معرفی ما <small>(نام کاربری ما در شبکه&zwnj;های اجتماعی <strong>kolahban&zwj;&zwj;&zwj;</strong> است)</small></li>
      <li>پول :)</li>
    </ul>
    <blockquote>
      <a className="btn" href="/story">ارسال داستان</a>
      <a className="btn" href="/support">حمایت مالی</a>
    </blockquote>
  </div>
}


export function Head() {
  return (
    <>
      <title>عقاب‌ها</title>
      <meta name="description" content="آموزش مقابله با کلاهبرداری" />
    </>
  )
}