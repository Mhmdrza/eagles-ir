import React from 'react'

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "fa" })
    setHeadComponents([
        <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fa-Iran-sans-web-bold.woff2"
            crossOrigin="anonymous"
        />,
        <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fa-Iran-sans-web-light.woff2"
            crossOrigin="anonymous"
        />
    ]);
};