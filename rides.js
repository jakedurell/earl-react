// const moment = require('moment');
var moment = require('moment-timezone');

function todayAt(time) {
    let todayAtTime = todayAtTimeAsMoment(time);
    return todayAtTime.toDate();
}

function tomorrowAt(time) {
    let todayAtTime = todayAtTimeAsMoment(time);
    let tomorrow = todayAtTime.add(1, 'day')
    return tomorrow.toDate();
}

function todayAtTimeAsMoment(time) {
    let today = moment().format('YYYY-MM-DD');
    let todayAtTimeString = today + 'T' + time + ":00";
    let todayAtTime = moment.tz(todayAtTimeString, 'America/New_York');
    return todayAtTime;
}


const RideData = props => {
    const rides = [
        {
            "patientName": "Martha Jackson",
            "appointmentTime": new Date('August 10, 2018 08:30:00'),
            "contactNumber": "802-123-5599",
            "classification": "Wheelchair",
            "status": "dropped off",
            "driver": "Earl",
            "pickup": {
                "locationType": "home",
                "time": new Date('August 10, 2018 07:30:00'),
                "address1": "105 Depot St.",
                "address2": "",
                "city": "Stowe",
                "state": "VT",
                "zipCode": "05672"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": new Date('August 10, 2018 08:15:00'),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": "This is a past record that shouldn't appear in today/tomorrow views."
        },

        {
            "patientName": "Hillary Reay",
            "appointmentTime": todayAt("10:30"),
            "contactNumber": "802-123-5599",
            "classification": "Wheelchair",
            "status": "dropped off",
            "driver": "Earl",
            "pickup": {
                "locationType": "home",
                "time": todayAt("09:00"),
                "address1": "81 Main St.",
                "address2": "",
                "city": "Essex Junction",
                "state": "VT",
                "zipCode": "05452"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": todayAt("10:00"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": "Please text patient when you arrive at house."
        },

        {
            "patientName": "Ashton Ritzman",
            "appointmentTime": todayAt("11:30"),
            "contactNumber": "802-123-5588",
            "classification": "Ambulatory",
            "status": "picked up",
            "driver": "Veronica",
            "pickup": {
                "locationType": "home",
                "time": todayAt("10:30"),
                "address1": "523 Isham Rd.",
                "address2": "",
                "city": "Hinesburg",
                "state": "VT",
                "zipCode": "05461"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": todayAt("11:15"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": ""
        },

        {
            "patientName": "Rupert Bermejo",
            "appointmentTime": todayAt("12:00"),
            "contactNumber": "802-123-5588",
            "classification": "Ambulatory",
            "status": "picked up",
            "driver": "Alfred",
            "pickup": {
                "locationType": "home",
                "time": todayAt("10:15"),
                "address1": "256 South Bayley Hazen Rd.",
                "address2": "",
                "city": "Ryegate",
                "state": "VT",
                "zipCode": "05042"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": todayAt("11:40"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": ""
        },

        {
            "patientName": "Wilfredo Conlon",
            "appointmentTime": todayAt("11:15"),
            "contactNumber": "802-123-5588",
            "classification": "Ambulatory",
            "status": "dropped off",
            "driver": "Maverick",
            "pickup": {
                "locationType": "home",
                "time": todayAt("10:00"),
                "address1": "276 Monroe St.",
                "address2": "",
                "city": "Middlebury",
                "state": "VT",
                "zipCode": "05753"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": todayAt("11:00"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": ""
        },


        {
            "patientName": "Matthew Lafountain",
            "appointmentTime": todayAt("12:30"),
            "contactNumber": "802-123-5999",
            "classification": "Ambulatory",
            "status": "booked",
            "driver": "Earl",
            "pickup": {
                "locationType": "home",
                "time": todayAt("11:00"),
                "address1": "9 Hyde Road",
                "address2": "",
                "city": "Grand Isle",
                "state": "VT",
                "zipCode": "05458"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": todayAt("12:00"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": "Patient lives in apartment in back of house."
        },

        {
            "patientName": "Kathleen Morris",
            "appointmentTime": todayAt("15:15"),
            "contactNumber": "802-123-5999",
            "classification": "Ambulatory",
            "status": "booked",
            "driver": "Alfred",
            "pickup": {
                "locationType": "home",
                "time": todayAt("13:45"),
                "address1": "78 Creamery St.",
                "address2": "",
                "city": "Lincoln",
                "state": "VT",
                "zipCode": "05443"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": todayAt("14:45"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": ""
        },

        {
            "patientName": "Alice Luck",
            "appointmentTime": todayAt("16:45"),
            "contactNumber": "802-123-5999",
            "classification": "Ambulatory",
            "status": "booked",
            "driver": "Maverick",
            "pickup": {
                "locationType": "home",
                "time": todayAt("16:00"),
                "address1": "1242 Kenyon Rd.",
                "address2": "",
                "city": "Richmond",
                "state": "VT",
                "zipCode": "05477"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": todayAt("16:30"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": "Patient may need help getting to elevator at Tilley."
        },

        {
            "patientName": "Kathleen Morris",
            "appointmentTime": todayAt("15:15"),
            "contactNumber": "802-123-5999",
            "classification": "Ambulatory",
            "status": "booked",
            "driver": "Veronica",
            "pickup": {
                "locationType": "hospital",
                "time": todayAt("17:01"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "dropoff": {
                "locationType": "home",
                "time": todayAt("18:00"),
                "address1": "78 Creamery St.",
                "address2": "",
                "city": "Lincoln",
                "state": "VT",
                "zipCode": "05443"
            },
            "notes": ""
        },

        {
            "patientName": "Krishnan Nair",
            "appointmentTime": tomorrowAt("08:00"),
            "contactNumber": "802-123-5999",
            "classification": "Wheelchair",
            "status": "requested",
            "driver": "unassigned",
            "pickup": {
                "locationType": "home",
                "time": tomorrowAt("06:45"),
                "address1": "176 Waters Edge Dr.",
                "address2": "",
                "city": "North Hero",
                "state": "VT",
                "zipCode": "05474"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": tomorrowAt("07:45"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": ""
        },

        {
            "patientName": "Julia Morales",
            "appointmentTime": tomorrowAt("09:30"),
            "contactNumber": "802-123-5999",
            "classification": "Special circumstances",
            "status": "requested",
            "driver": "unassigned",
            "pickup": {
                "locationType": "home",
                "time": tomorrowAt("08:00"),
                "address1": "15 Canada St.",
                "address2": "Apt. 3",
                "city": "Swanton",
                "state": "VT",
                "zipCode": "05488"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": tomorrowAt("09:15"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": "Apartment is in rear of building"
        },

        {
            "patientName": "Krishnan Nair",
            "appointmentTime": tomorrowAt("08:00"),
            "contactNumber": "802-123-5999",
            "classification": "Wheelchair",
            "status": "requested",
            "driver": "unassigned",
            "pickup": {
                "locationType": "hospital",
                "time": tomorrowAt("12:00"),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"

            },
            "dropoff": {
                "locationType": "home",
                "time": tomorrowAt("13:00"),
                "address1": "176 Waters Edge Dr.",
                "address2": "",
                "city": "North Hero",
                "state": "VT",
                "zipCode": "05474"
            },
            "notes": ""
        },

        {
            "patientName": "Martha Jackson",
            "appointmentTime": new Date('October 10, 2018 08:30:00'),
            "contactNumber": "802-123-5599",
            "classification": "Wheelchair",
            "status": "unassigned",
            "driver": "Earl",
            "pickup": {
                "locationType": "home",
                "time": new Date('October 10, 2018 07:30:00'),
                "address1": "105 Depot St.",
                "address2": "",
                "city": "Stowe",
                "state": "VT",
                "zipCode": "05672"
            },
            "dropoff": {
                "locationType": "hospital",
                "time": new Date('October 10, 2018 08:15:00'),
                "address1": "UVM Medical Center",
                "address2": "Tilley Drive",
                "city": "South Burlington",
                "state": "VT",
                "zipCode": "05403"
            },
            "notes": "This is a future record that shouldn't appear in today/tomorrow views."
        },

    ];
}

export default RideData;
