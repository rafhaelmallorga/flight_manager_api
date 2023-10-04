const { MISSIONS, FLIGHT_STATUS, SLOTS} = require("../constants/constants");


class Service {
    static makeSchedule (flights, instructors, aircrafts) {
        let dailySchedule = [];
        let possibleInstructors;
        let possibleAcfts;

        // Order flights by last student flight date
        flights = this.orderFlights(flights);

        // Check for checkrides
        const checkridesFlights = flights.filter(flight => flight.mission.isCheckride === true)
        if (checkridesFlights) {}

        // Check for MLTE and IFR
        const mlteVfrAndIfrFlights = flights.filter(flight => flight.aircraftModel === "seneca") 
        if (mlteVfrAndIfrFlights) {
            possibleInstructors = instructors.filter(inva=>inva.isMlte)
            // possibleAcfts = aircrafts.filter(acft=>acft.model === flight.aircraftModel)
            
            console.log("Possible Invas", possibleInstructors)
            this.selectInva(mlteVfrAndIfrFlights, possibleInstructors)

            // Selecionar a aeronave
            // Alterar status do voo para confirmado ou cancelado

            console.log("updatedFlights", mlteVfrAndIfrFlights)

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

    static selectInva (flights, instructors) {
        flights.forEach( (flight, index) => {
            const flighTimeIndex = SLOTS.indexOf(flight.time)
            const isNightFlight = flight.time === "night"; //Alterar posteriormente para flight.mission.isNight
            const twoSlots = flight.mission.slots > 1
            let selectedInva;
            // Checar quantidade de slots para a missao
            
            if (isNightFlight) selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.isNight);
            if (!twoSlots && !isNightFlight) selectedInva = instructors.find(inva => inva.availability[flight.time]);
            if (twoSlots && !isNightFlight) {
                selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.availability[SLOTS[flighTimeIndex + 1]]);
            }

            if (selectedInva) {
                if (isNightFlight || !twoSlots) {
                    selectedInva.availability[flight.time] = false;
                    flight.instructor = selectedInva
                } else {
                    selectedInva.availability[flight.time] = false;
                    selectedInva.availability[SLOTS[flighTimeIndex + 1]] = false
                    flight.instructor = selectedInva
                }
            } else {
                flight.status = FLIGHT_STATUS.CANCELED;
            }

        })
    }
}

module.exports = Service;