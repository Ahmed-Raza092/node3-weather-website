const request= require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'https://www.meteosource.com/api/v1/free/point?lat=' +latitude+ ' &lon=' +longitude+ '&sections=all&timezone=UTC&language=en&units=metric&key=ylp1zn13ua6hvadpan5mxjcxgl48kuigw4gjz3hx'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.detail) {
            callback('Unable to find location. ',undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is Currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precipitation.total + ' Chances of rain.')
        }

    })
    
}

module.exports= forecast