import React from "react"

const Page = ({ pageContext }) => {
  return (
    <>
      <div>
        <h1>{pageContext.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </>
  )
}

export default Page
