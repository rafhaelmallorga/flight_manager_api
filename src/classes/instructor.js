const { faker } = require("@faker-js/faker")

class Instructor {
    constructor({fullName, nickname, isCheckride, isVfr, isIfr, isMnte, isMlte, isNight, canSolo, aircrafts, availability}) {
        this._id = faker.string.uuid()
        this.fullName = fullName;
        this.nickname = nickname;
        this.isCheckride = isCheckride;
        this.isVfr = isVfr;
        this.isIfr = isIfr;
        this.isMnte = isMnte;
        this.isMlte = isMlte;
        this.isNight = isNight;
        this.canSolo = canSolo;
        this.aircrafts = aircrafts;
        this.availability = availability;
    }
}

module.exports = Instructor;