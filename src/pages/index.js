import React from "react"
import './base.css'

export default function Home() {
  return <div>
    <h1>کلاهبان</h1>
    <p>چه کلاه شما رو بردارن، چه کلاه بذارن سرتون، شما متضرر شدی. یکی باید حواسش وضعیت کلاه شما باشه</p>
    <h2>دنبال چی هستیم؟</h2>
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
      <a class="btn" href="/story">ارسال داستان</a>


      <a class="btn" href="/support">حمایت مالی</a>
    </blockquote>
  </div>
}


export function Head() {
  return (
    <>
      <title>کلاهبان</title>
      <meta name="description" content="آموزش مقابله با کلاهبرداری" />
      <link 
        rel="preload" 
        as="font" 
        type="font/woff2" 
        href="https://passenger-pwa-cdn.snapp.ir/fonts/Iran-sans-fa/fa-Iran-sans-web-bold.woff2" 
        crossorigin 
      />
      <link 
        rel="preload" 
        as="font" 
        type="font/woff2" 
        href="https://passenger-pwa-cdn.snapp.ir/fonts/Iran-sans-fa/fa-Iran-sans-web-light.woff2" 
        crossorigin="anonymous"
      />
      <link 
        id='fontcss'
        rel="preload"
        as="style"
        href="https://web-cdn.snapp.ir/snapp-website/css/fonts.css" 
      />
      <script id='fkGatsbyHeadApi'>{`
        fontcss.setAttribute('onload', null);
        fontcss.setAttribute('rel', 'stylesheet');
        fontcss.setAttribute('media', 'all');
        fkGatsbyHeadApi.remove();
      `}</script>
      <noscript>
        <link 
          rel="stylesheet"
          href="https://web-cdn.snapp.ir/snapp-website/css/fonts.css" 
        />
      </noscript>
    </>
  )
}