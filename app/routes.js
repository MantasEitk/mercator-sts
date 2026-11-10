//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/create-routes/
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/mars-duration-answer', function(request, response) {

    var marsDuration = request.session.data['marsDuration']
    if (marsDuration == "Yes"){
        response.redirect("/name")
    } else {
        response.redirect("/cannot-travel")
    }
})

router.post('/destination-answer', function(request, response) {

    var destination = request.session.data['destination']
    if (destination == "Mars"){
        response.redirect("/mars-duration")
    } else {
        response.redirect("/name")
    }
})


