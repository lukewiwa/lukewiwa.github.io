import React from 'react'
import { withRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown/with-html'
//

export default withRouteData(({ post }) => (
  <div>
    <br />
    <h1>{post.data.title}</h1>
    <ReactMarkdown source={post.content} escapeHtml={false} />
  </div>
))
