const Flight = require("../classes/flight");
const { faker } = require("@faker-js/faker");
const { FLIGHT_STATUS } = require("../constants/constants")
const fs = require("fs");


const generateFlights = () => {
    const studentsDb = JSON.parse(fs.readFileSync("src/database/studentsDb.json", "utf-8"))

    const hours = ["six", "eight", "ten", "twelve", "fourteen", "night"];
    const acftModels = ["cherokee", "tupi", "da20", "da40", "corisco", "seneca"]

    const flights = []

    studentsDb.forEach(student => {
        const flight = new Flight({
            status: FLIGHT_STATUS.PENDING,
            date: new Date(),
            student,
            aircraftModel: acftModels[faker.number.int({min: 0, max: 5})],
            instructor: null,
            bookedAircraft: null,
            time: hours[faker.number.int({min: 0, max: 5})]
        });

        flights.push(flight)
    })

    fs.writeFile(`src/database/flightsDb.json`, JSON.stringify(flights), "utf-8", (err) => {
        if (err) console.log(err)
    })
}

generateFlights();