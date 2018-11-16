import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { blogFiles, magCode } from './pullData'

export default {
  siteRoot: 'https://lukewiwa.com',
  getSiteData: () => ({
    title: 'Wiwa',
  }),
  getRoutes: async () => {
    const posts = await blogFiles('blog')
    const magTable = await magCode()
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/gymnastics',
        component: 'src/containers/Gymnastics',
        children: [
          {
            path: '/markov',
            component: 'src/gymnastics/Markov'
          },
          {
            path: '/MAG2020',
            component: 'src/gymnastics/MAG2020',
            getData: () => ({
              magTable
            })
          },
        ]
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
