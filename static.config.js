import fs from 'fs'
import util from 'util'
import path from 'path'
import matter from 'gray-matter'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

const readdir = util.promisify(fs.readdir)

const sortByDate = (mdFiles) => {
  return mdFiles.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
}

const mdContent = async (dir, files) => {
  return await files.map(file => {
    let post = path.join(dir, file)
    let md = matter.read(post)
    return md
  })
}

const dateString = async (mdArray) => {
  return await mdArray.map(entry => {
    let postDate = new Date(entry.data.date)
    entry.data.date = postDate.toLocaleDateString('en-AU')
    return entry
  })
}

const blogFiles = async (dir) => {
  const files = await readdir(dir)
  let md = await mdContent(dir, files)
  let dateSorted = await sortByDate(md)
  let content = await dateString(dateSorted)
  return content
}

export default {
  siteRoot: 'https://lukewiwa.com',
  getSiteData: () => ({
    title: 'Wiwa',
  }),
  getRoutes: async () => {
    const posts = await blogFiles('blog')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/gymnastics',
        component: 'src/containers/Gymnastics',
        children: [
          { path: '/markov', component: 'src/gymnastics/Markov' },
          { path: '/MAG2020', component: 'src/gymnastics/MAG2020' },
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
