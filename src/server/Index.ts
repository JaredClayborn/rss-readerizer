import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3001

// app.get('/',(req, res) => res.send('Hello, World!'))
app.get('/back/feeds', (req: express.Request, res: express.Response) => {
    console.log('here i am')
        // "dev": "export NODE_ENV=development && ts-node src/server/Index.ts"
    const wizardsUrl = 'http://www.wizards.com/rss.asp?x=magic'
    console.log('url:', wizardsUrl)
    res.send('hi')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
