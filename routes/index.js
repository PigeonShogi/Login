const express = require('express')
const router = express.Router()
const pseudoData = require('../models/pseudoData')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const welcomeMessage = ''

  const loginCheck = pseudoData.find(element => {
    return element.email === email && element.password === password
  })

  if (loginCheck === undefined) {
    res.render('login_failure')
  } else {
    const welcomeMessage = loginCheck.firstName
    res.render('welcome', { welcomeMessage })
  }

})

module.exports = router