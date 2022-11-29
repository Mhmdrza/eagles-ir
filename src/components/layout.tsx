import React from "react"

export default function Layout({ children }) {
  return (
    <div className="container mx-auto prose dark:prose-invert">
      {children}
    </div>
  )
}