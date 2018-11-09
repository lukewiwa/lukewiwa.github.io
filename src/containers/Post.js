import React from 'react'
import { withRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown/with-html'
import { Title } from '../styles/Styled'
//


export default withRouteData(({ post }) => (
  <div className="flex-center">
    <div className="container">
      <Title>{post.data.title}</Title>
      <ReactMarkdown source={post.content} escapeHtml={false} />
    </div>
  </div>
))
