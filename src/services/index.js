const { MISSIONS, FLIGHT_STATUS, SLOTS} = require("../constants/constants");


class Service {
    static makeSchedule (flights, instructors) {
        let dailySchedule = [];
        let possibleInstructors;

        // Order flights by last student flight date
        flights = this.orderFlights(flights);

        // Check for checkrides
        const checkridesFlights = flights.filter(flight => flight.mission.isCheckride === true)
        if (checkridesFlights) {}

        // Check for MLTE and IFR
        const mlteVfrAndIfr = flights.filter(flight => flight.aircraftModel === "seneca") 
        if (mlteVfrAndIfr) {
            possibleInstructors = instructors.filter(inva=>inva.isMlte)
            console.log("Possible Invas", possibleInstructors)

            mlteVfrAndIfr.forEach( (flight, index) => {
                const flighTimeIndex = SLOTS.indexOf(flight.time)
                const isNightFlight = flight.time;

                // Checar quantidade de slots para a missao

                let selectedInva = isNightFlight ?
                                    possibleInstructors.find(inva => inva.availability[flight.time])
                                    : possibleInstructors.find(inva => inva.availability[flight.time] && inva.availability[SLOTS[flighTimeIndex + 1]])


                if (selectedInva) {
                    if (isNightFlight) {
                        selectedInva.availability[flight.time] = false;
                        flight.instructor = selectedInva
                    } else {
                        selectedInva.availability[flight.time] = false;
                        selectedInva.availability[SLOTS[flighTimeIndex + 1]] = false
                        flight.instructor = selectedInva
                    }
                }

                // Selecionar a aeronave

                // Alterar status do voo para confirmado ou cancelado

            })

            console.log("updatedFlights", mlteVfrAndIfr)

        }

        // Check for IFR
        const isIfr = flights.filter(flight => flight.mission.isIfr)
        if (isIfr) {}
        
        // Check for night
        const isNight = flights.filter(flight => flight.mission.isNight)
        if (isNight) {}

    }

    static orderFlights (flights) {
        return flights.sort((a, b) => {
            if (a.student.lastFlightDate > b.student.lastFlightDate) {
                return 1;
            }
            if (a.student.lastFlightDate < b.student.lastFlightDate) {
                return -1;
            }
            return 0;
        })
    }
}

module.exports = Service;