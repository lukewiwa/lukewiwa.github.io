import fs from 'fs'
import util from 'util'
import path from 'path'
import matter from 'gray-matter'
import axios from 'axios'
import csv from 'csvtojson'

const readdir = util.promisify(fs.readdir)
const fetch = util.promisify(axios)

const sortByDate = mdFiles => mdFiles.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))

const mdContent = async (dir, files) => files.map(file => {
  const post = path.join(dir, file)
  const md = matter.read(post)
  return md
})

const dateString = async mdArray => mdArray.map(entry => {
  const postDate = new Date(entry.data.date)
  entry.data.date = postDate.toLocaleDateString('en-AU')
  return entry
})

export const blogFiles = async dir => {
  const files = await readdir(dir)
  const md = await mdContent(dir, files)
  const dateSorted = await sortByDate(md)
  const content = await dateString(dateSorted)
  return content
}

export const magCode = async () => {
  const response = await fetch.get(
    'https://raw.githubusercontent.com/lukewiwa/code_of_points_MAG_2020/master/code_of_points_MAG_2020.csv',
    { responseType: 'text' }
  )
  const text = response.data
  const table = await csv({
    ignoreColumns: /(id|index)/
  }).fromString(text)
  return table
}
