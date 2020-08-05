import React from "react"

import Layout from "../components/layout"

const browser = typeof window !== "undefined" && window;
const NotFoundPage = () => {
  return (
    browser && (
      <div>
        <Layout>
          <h1>404 Page</h1>
        </Layout>
      </div>
    )
  )
}

export default NotFoundPage
