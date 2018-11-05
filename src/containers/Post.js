import React from 'react'
import { withRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown/with-html'
//
import CodeRenderer from '../components/CodeRenderer'

export default withRouteData(({ post }) => (
  <div>
    <br />
    <h3>{post.data.title}</h3>
    <ReactMarkdown
      source={post.content}
      renderers={{ CodeBlock: CodeRenderer, Code: CodeRenderer }}
      escapeHtml={false} />
  </div>
))
