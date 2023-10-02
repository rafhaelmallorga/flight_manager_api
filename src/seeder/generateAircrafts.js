const { AIRCRAFTS, INSPECTIONS } = require("../constants/constants");
const { faker } = require("@faker-js/faker");
const fs = require("fs");
const Aircraft = require("../classes/aircraft");


const generateAircrafts = () => {
    const aircrafts = [];

    // Cherokee
    AIRCRAFTS.cherokee.registrations.forEach(acft => {
        let currentAcft = new Aircraft({
            manufacturer: AIRCRAFTS.cherokee.manufacturer,
            model: AIRCRAFTS.cherokee.model,
            icaoCode: AIRCRAFTS.cherokee.icaoCode,
            registration: acft,
            hourPrice: AIRCRAFTS.cherokee.hourPrice,
            totalFlightTime: faker.number.int({min: 5000, max: 10000}),
            hoursAvailable: faker.number.int({min: 0, max: 50}),
            nextInspection: INSPECTIONS[faker.number.int({min: 0, max: 1})],
            tbo: faker.number.int({min: 500, max: 1000}),
            isIfr: false,
            isNight: false,
            isMlte: false
        })
        aircrafts.push(currentAcft)
    });

    // Tupi
    AIRCRAFTS.tupi.registrations.forEach(acft => {
        let currentAcft = new Aircraft({
            manufacturer: AIRCRAFTS.tupi.manufacturer,
            model: AIRCRAFTS.tupi.model,
            icaoCode: AIRCRAFTS.tupi.icaoCode,
            registration: acft,
            hourPrice: AIRCRAFTS.tupi.hourPrice,
            totalFlightTime: faker.number.int({min: 5000, max: 10000}),
            hoursAvailable: faker.number.int({min: 0, max: 50}),
            nextInspection: INSPECTIONS[faker.number.int({min: 0, max: 1})],
            tbo: faker.number.int({min: 500, max: 1000}),
            isIfr: true,
            isNight: true,
            isMlte: false
        })
        aircrafts.push(currentAcft)
    });

    //da20
    AIRCRAFTS.da20.registrations.forEach(acft => {
        let currentAcft = new Aircraft({
            manufacturer: AIRCRAFTS.da20.manufacturer,
            model: AIRCRAFTS.da20.model,
            icaoCode: AIRCRAFTS.da20.icaoCode,
            registration: acft,
            hourPrice: AIRCRAFTS.da20.hourPrice,
            totalFlightTime: faker.number.int({min: 2000, max: 5000}),
            hoursAvailable: faker.number.int({min: 0, max: 50}),
            nextInspection: INSPECTIONS[faker.number.int({min: 0, max: 1})],
            tbo: faker.number.int({min: 500, max: 1000}),
            isIfr: true,
            isNight: true,
            isMlte: false
        })
        aircrafts.push(currentAcft)
    });

    //da40
    AIRCRAFTS.da40.registrations.forEach(acft => {
        let currentAcft = new Aircraft({
            manufacturer: AIRCRAFTS.da40.manufacturer,
            model: AIRCRAFTS.da40.model,
            icaoCode: AIRCRAFTS.da40.icaoCode,
            registration: acft,
            hourPrice: AIRCRAFTS.da40.hourPrice,
            totalFlightTime: faker.number.int({min: 1000, max: 3000}),
            hoursAvailable: faker.number.int({min: 0, max: 50}),
            nextInspection: INSPECTIONS[faker.number.int({min: 0, max: 1})],
            tbo: faker.number.int({min: 500, max: 1000}),
            isIfr: true,
            isNight: true,
            isMlte: false
        })
        aircrafts.push(currentAcft)
    });

    //corisco
    AIRCRAFTS.corisco.registrations.forEach(acft => {
        let currentAcft = new Aircraft({
            manufacturer: AIRCRAFTS.corisco.manufacturer,
            model: AIRCRAFTS.corisco.model,
            icaoCode: AIRCRAFTS.corisco.icaoCode,
            registration: acft,
            hourPrice: AIRCRAFTS.corisco.hourPrice,
            totalFlightTime: faker.number.int({min: 5000, max: 10000}),
            hoursAvailable: faker.number.int({min: 0, max: 50}),
            nextInspection: INSPECTIONS[faker.number.int({min: 0, max: 1})],
            tbo: faker.number.int({min: 500, max: 1000}),
            isIfr: true,
            isNight: true,
            isMlte: false
        })
        aircrafts.push(currentAcft)
    });

    //seneca
    AIRCRAFTS.seneca.registrations.forEach(acft => {
        let currentAcft = new Aircraft({
            manufacturer: AIRCRAFTS.seneca.manufacturer,
            model: AIRCRAFTS.seneca.model,
            icaoCode: AIRCRAFTS.seneca.icaoCode,
            registration: acft,
            hourPrice: AIRCRAFTS.seneca.hourPrice,
            totalFlightTime: faker.number.int({min: 5000, max: 10000}),
            hoursAvailable: faker.number.int({min: 0, max: 50}),
            nextInspection: INSPECTIONS[faker.number.int({min: 0, max: 1})],
            tbo: faker.number.int({min: 500, max: 1000}),
            isIfr: true,
            isNight: true,
            isMlte: true
        })
        aircrafts.push(currentAcft)
    });

    fs.writeFile("src/database/aircraftsDb.json", JSON.stringify(aircrafts), "utf-8", err => {
        if (err) console.log(err)
    })
}   

generateAircrafts()