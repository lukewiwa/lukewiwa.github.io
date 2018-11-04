import fs from 'fs'
import util from 'util'
import path from 'path'
import matter from 'gray-matter'

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
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/gymnastics',
        component: 'src/containers/Gymnastics'
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
}
