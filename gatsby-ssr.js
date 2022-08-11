const React = require('react');

exports.onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "fa" })
}

exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="https://passenger-pwa-cdn.snapp.ir/fonts/Iran-sans-fa/fa-Iran-sans-web-bold.woff2"
            crossorigin
        />,
        <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="https://passenger-pwa-cdn.snapp.ir/fonts/Iran-sans-fa/fa-Iran-sans-web-light.woff2"
            crossorigin="anonymous"
        />,
        <link
            id='fnt'
            rel="preload"
            as="style"
            href="https://web-cdn.snapp.ir/snapp-website/css/fonts.css"
        />,
        <script id='scf'>{`setTimeout(function(){fnt.setAttribute('onload','fnt.media=\\'all\\';fnt.rel=\\'stylesheet\\';fnt.removeAttribute(\\'onload\\')');scf.remove()},0)`}</script>,
        <noscript>
            <link
                rel="stylesheet"
                href="https://web-cdn.snapp.ir/snapp-website/css/fonts.css"
            />
        </noscript>
    ]);
};