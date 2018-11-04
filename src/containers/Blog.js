
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    <h1>Ramblings</h1>
    <br />
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
))
