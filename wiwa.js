const fs = require('fs')
const util = require('util')
const path = require('path')
const matter = require('gray-matter')

const readdir = util.promisify(fs.readdir)

const sortByDate = mdFiles => mdFiles.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))

const mdContent = async (dir, files) => files.map(file => {
  const post = path.join(dir, file)
  const md = matter.read(post)
  return md
})

const dateString = async mdArray => mdArray.map(md => {
  const date = md.data.date
  md.data.date = new Date(date)
  return md
})

const blogFiles = async dir => {
  const files = await readdir(dir)
  const md = await mdContent(dir, files)
  const dateSorted = await sortByDate(md)
  const content = await dateString(dateSorted)
  return content
}

blogFiles('blog').then(f => console.log(f))
