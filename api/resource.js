const express = require('express');
const route = express.Router();


module.exports = function() {

  route.get('/', getHome);

  route.post('/home', dummyData);

  route.get('/alphabet');

  route.get('/:id/letter');

  function getHome (req, res) {
    res.redirect('/home')
  }

  function dummyData(req,res,next){
    res.json({"data":'hello'})
  }


  return route;
};
