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
        React.createElement("link", {
            rel: "preload",
            href: "/font.css",
            as: "style",
            onLoad: "this.media='all';this.rel='stylesheet';this.onload=null;"
        }),
        <noscript>
            <link
                rel="stylesheet"
                href="/font.css"
            />
        </noscript>
    ]);
};