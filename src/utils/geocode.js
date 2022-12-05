const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://us1.locationiq.com/v1/search?key=pk.dc17557411d9d7fa49df964d6fd3fca3&q=' + encodeURIComponent(address) + '&format=json&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to Connect to location Services!', undefined)
        } else if (body.error) {
            callback('Unable to find location, TRY ANOTHER SEARCH', undefined)
        } else {
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
                location: body[0].display_name
                

            })

        }

    })

}

module.exports = geocode
