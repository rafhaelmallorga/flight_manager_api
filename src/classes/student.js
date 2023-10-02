const { faker } = require("@faker-js/faker");

class Student {
    constructor({fullName , nickname, course, phase, currentMission, isSolo, soloExpires, isSoloValid, lastFlightDate, aircraftsGrounds}) {
        this._id = faker.string.uuid()
        this.fullName = fullName;
        this.nickname = nickname;
        this.course = course;
        this.phase = phase;
        this.currentMission = currentMission;
        this.isSolo = isSolo;
        this.soloExpires = soloExpires;
        this.isSoloValid = isSoloValid;
        this.lastFlightDate = lastFlightDate;
        this.aircraftsGrounds = aircraftsGrounds;
    }

    checkIfSoloIsValid() {
        return this.soloExpires - new Date() > 0 ? true : false;
    }

}

module.exports = Student