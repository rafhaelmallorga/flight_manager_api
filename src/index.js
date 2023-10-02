const fs = require("fs");
const Service = require("./services");


// const instructor = new Instructor('Rafhael', 'Mallorga', 'Mallorga', false, true, true, true, false, true, true, {cherokee: true, tupi: true}, {six: true, eight: true, ten: true, twelve: true, fourteen: true, night: false});
// const student = new Student('Gabriel', 'Mallorga', 'Bide', 'PP', 'PS', '1', false, false, new Date(), {cherokee: true, tupi: true});

const flightsDb = JSON.parse(fs.readFileSync("src/database/flightsDb.json", "utf-8"));
const instructorsDb = JSON.parse(fs.readFileSync("src/database/instructorsDb.json", "utf-8"));

Service.makeSchedule(flightsDb, instructorsDb)

