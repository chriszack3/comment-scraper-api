import express from 'express'
import runScraper from './lib/getComments.js'

const app = express()
const port = process.env.PORT || 3000


app.get('/', async (req, res) => {
  try {
    const data = await runScraper()
    res.status(200).json({ data: data })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})