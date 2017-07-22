const express = require('express')
const route = express.Router()

module.exports = () => {
  function getHome(req, res) {
    res.redirect('/home')
  }
  function dummyData(req, res) {
    res.json({ data: 'hello' })
  }
  route.get('/', getHome)
  route.post('/home', dummyData)
  route.get('/alphabet')
  route.get('/:id/letter')
  return route
}
