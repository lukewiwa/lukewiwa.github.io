import fs from 'fs'
import util from 'util'
import path from 'path'
import matter from 'gray-matter'

const readdir = util.promisify(fs.readdir)

const blogFiles = async (dir) => {
    const files = await readdir(dir)
    let content = files.map(file => {
        let post = path.join(dir, file)
        let contents = matter.read(post)
        let postDate = contents.data.date
        contents.data.date = new Date(postDate).toLocaleDateString('en-AU')
        return contents

    }).sort((a, b) => b.data.date - a.data.date)
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
