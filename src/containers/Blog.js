
import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Title } from '../components/Styled'
//

export default withRouteData(({ posts }) => (
  <div className="flex-center">
    <div className="container">
      <Title>Ramblings</Title>
      {posts.map(post => (
        <span key={post.data.slug}>
          <h4>
            <Link to={`/blog/${post.data.slug}/`}>{post.data.title}</Link>
          </h4>
          <small>{post.data.date}</small>
          <p>{post.data.teaser}</p>
        </span>
      ))}
    </div>
  </div>
))
