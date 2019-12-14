const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/61c1348a8f380c849eb98cd460767009/'+ longitude +','+ latitude +'?units=si&lang=sr'

  request({url, json:true}, (error, {body})=>{
    if(error){
      callback('Unable to connect to weather services', undefined)
    }else if(body.error){
      callback('Unable to find the location', undefined)
    }else{
      callback(undefined, `${body.daily.data[0].summary} Currently it is ${body.currently.temperature} degrees outside and ${body.currently.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast