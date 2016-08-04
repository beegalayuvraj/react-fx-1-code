"use strict";

var request = require('request');
/*var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);*/

module.exports = function( currencyPairQueryString, io) {
  console.log("gettingFxRates");
  let fxUrl = 'http://webrates.truefx.com/rates/connect.html?u=fx67&p=FR33FLY&q=davefx&c=' + currencyPairQueryString + '&f=csv&s=n';
  request( fxUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      request("http://webrates.truefx.com/rates/connect.html?id=" + body, function(error, response, body) {
          if (!error && response.statusCode == 200) {
            
            //create array by each newline
            let fxArr = body.split("\n");
            
            //remove any empty values
            fxArr = fxArr.filter( function(element) { return element.replace(/(\r\n|\n|\r)/gm, "") });
            
            let baseCurrency;
            //get base currency from first three characters of the fx pair
            try {
              baseCurrency = fxArr[0].substring(0, 3);
            } catch(e) {
              console.log("Error at baseCurrency.substring(0,3)",e);
              return;
            }

            //split comma seperated values in string to array elements
            fxArr = fxArr.map( function(element) {
              return element.split(",")
            })
            //console.log(fxArr);
            //create object that contains all fx data for socket
            let fxObj = {"baseCurrency":baseCurrency, "fxArr":fxArr };
            console.log("emiting data", fxObj)
            //emit the object in the socket
            io.sockets.emit('data', fxObj);
          }
      })
    }
  })
}