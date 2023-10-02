const INSPECTIONS = require("../constants/constants")
const { faker } = require("@faker-js/faker");

class Aircraft {
    
    constructor({manufacturer, model, icaoCode, registration, hourPrice, totalFlightTime, hoursAvailable, nextInspection, tbo, isIfr, isNight, isMlte}) {
        this._id = faker.string.uuid()
        this.manufacturer = manufacturer;
        this.model = model;
        this.icaoCode = icaoCode;
        this.registration = registration;
        this.hourPrice = hourPrice;
        this.totalFlightTime = totalFlightTime;
        this.hoursAvailable = hoursAvailable;
        this.nextInspection = nextInspection;
        this.tbo = tbo;
        this.isIfr = isIfr;
        this.isNight = isNight;
        this.isMlte = isMlte;
        this.dailySchedule = {six: true, eight: true, ten: true, twelve: true, fourteen: true, night: true}
    }


    updateNextInspection = () => {
        if (this.hoursAvailable <= 0) {
            const currentInspectionIndex = INSPECTIONS.indexOf(this.nextInspection)

            if (currentInspectionIndex === INSPECTIONS.length - 1) {
                this.nextInspection = INSPECTIONS[0];
            } else {
                this.nextInspection = INSPECTIONS[currentInspectionIndex + 1];
            }
            this.hoursAvailable = 50;
        }
    }

    cleanAirplaneSchedule = () => {
        this.hoursAvailable = {six: true, eight: true, ten: true, twelve: true, fourteen: true, night: true}
    }
}

module.exports = Aircraft;