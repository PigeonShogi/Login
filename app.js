const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const app = express()
const port = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
