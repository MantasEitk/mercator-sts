//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/create-routes/
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/mars-duration-answer', function(request, response) {

    var marsDuration = request.session.data['marsDuration']
    if (!marsDuration) {
        response.render("mars-duration", { error: true })
    } else if (marsDuration == "Yes"){
        response.redirect("/name")
    } else {
        response.redirect("/cannot-travel")
    }
})

router.post('/destination-answer', function(request, response) {

    var destination = request.session.data['destination']
    if (!destination) {
        response.render("destination", { error: true })
    } else if (destination == "Mars"){
        response.redirect("/mars-duration")
    } else {
        response.redirect("/name")
    }
})

router.post('/name-answer', function(request, response) {

    var name = request.session.data['fullName']
    if (!name) {
        response.render("name", {error:true })
    } else  {
        response.redirect("/address")
    }
})

router.post('/address-answer', function(request, response) {

    var line1 = request.session.data['addressLine1']
    var town = request.session.data['addressTown']
    var postcode = request.session.data['addressPostcode']

    if (!line1 || !town || !postcode) {
        response.render("address", { error: true })
    } else {
        response.redirect("/check-answers")
    }
})


