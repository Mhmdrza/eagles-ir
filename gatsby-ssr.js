import React from 'react'

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "fa" })
    setHeadComponents([
        <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fa-Iran-sans-web-bold.woff2"
            crossorigin="anonymous"
        />,
        <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fa-Iran-sans-web-light.woff2"
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