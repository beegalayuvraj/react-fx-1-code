/**
**an Express server that gets FX data. From TrueFx and OpenExchangeRates
**Written by David Haygarth, Spring 2016, in between contracts and great skydiving weekends
**/
"use strict";
var getFxRates = require('./getFxRates');

var express = require('express'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  request = require('request'),
  path = require('path'),
  fs = require('fs'),
  jsond = require('../public/datastore/currency-pairs'),
  json, currencyPairs, interval, connected = 0, baseCurrency, currencyPairArray, currencyPairQueryString;

app.use( express.static( __dirname + '/../public') );
//app.use('/application', express.static( __dirname + '/../public/js/') );

app.get("/", function(req, res) {
  res.sendFile( path.join( __dirname + '/../public/index.html') );
});
currencyPairs = jsond.currencyPairs;

io.on('connection', function (socket) {
  connected++;
  socket.on('disconnect', function () {
    connected--;
  });
});

function filterQueryStringByBaseCurrency() {
    //filter currencies that start with the base currency
    currencyPairArray = currencyPairs.split(",");
    var currencyPairFiltered = currencyPairArray.filter( function(element) {
                          let re = new RegExp("^"+baseCurrency, 'igm');
                          let matched = element.match(re);
                          return matched;
                  } );
    currencyPairQueryString = currencyPairFiltered.toString();
}

app.get("/fx/addCurrency", function( req, res ) {

} );

app.get("/fx/:baseCurrency", function(req, res) {
  baseCurrency = req.params.baseCurrency;
  console.log('get fx > baseCurrency', baseCurrency );
  filterQueryStringByBaseCurrency();
  getFxRates(currencyPairQueryString, io);
  interval = setInterval( function(scope) {
    getFxRates(currencyPairQueryString, io)
  }, 1000 );
  res.send("getting fx")
});

http.listen(3000, function () {
  console.log('listening on: 3000');
});


