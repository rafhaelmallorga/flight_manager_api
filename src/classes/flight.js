const { MISSIONS } = require("../constants/constants");
const { faker } = require("@faker-js/faker")

class Flight {
    constructor({status, date, student, aircraftModel, instructor, bookedAircraft, time}) {
        this._id = faker.string.uuid()
        this.status = status;
        this.date = date;
        this.student = student;
        this.aircraftModel = aircraftModel;
        this.instructor = instructor;
        this.bookedAircraft = bookedAircraft;
        this.time = time;
        this.mission = MISSIONS[student.course][student.phase][student.currentMission];
    }
}

module.exports = Flight