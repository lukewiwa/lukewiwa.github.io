const axios = require('axios')
const util = require('util')
const csv = require('csvtojson')
//

const fetch = util.promisify(axios)


const MagCode = async () => {
  const response = await fetch.get(
    'https://raw.githubusercontent.com/lukewiwa/code_of_points_MAG_2020/master/code_of_points_MAG_2020.csv',
    { responseType: 'text' }
  )
  const text = response.data
  const table = await csv().fromString(text)
  return table
}

MagCode().then(x => console.log(x))
