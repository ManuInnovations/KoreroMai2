const express = require("express");
const route = express.Router();


module.exports = function() {

  route.post("/home", dummyData);

  function dummyData(req,res,next){
    res.json({"data":'hello'})
  }
  return route;
};
