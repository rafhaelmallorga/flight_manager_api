const { MISSIONS, FLIGHT_STATUS, SLOTS} = require("../constants/constants");


class Service {
    static makeSchedule (flights, instructors, aircrafts) {
        let dailySchedule = [];
        let possibleInstructors;
        let possibleAcfts;

        // Order flights by last student flight date
        flights = this.orderFlights(flights);
        this.distributeAcft(flights, aircrafts)
        this.selectInva(flights, instructors);

        console.log("Fliiiiiights", flights)

        // // Check for checkrides
        // const checkridesFlights = flights.filter(flight => flight.mission.isCheckride)
        // if (checkridesFlights) {
        //     possibleInstructors = instructors.filter(inva=>inva.isCheckride);
        //     this.selectInva(checkridesFlights, possibleInstructors)
        // }

        // // Check for MLTE and IFR
        // const mlteVfrAndIfrFlights = flights.filter(flight => flight.aircraftModel === "seneca") 
        // if (mlteVfrAndIfrFlights) {
        //     possibleInstructors = instructors.filter(inva=>inva.isMlte)
        //     possibleAcfts = aircrafts.filter(acft=>acft.model === "seneca")
        //     this.selectInva(mlteVfrAndIfrFlights, possibleInstructors)
        // }

        // // Check for IFR
        // const isIfr = flights.filter(flight => flight.mission.isIfr)
        // if (isIfr) {
        //     possibleInstructors = instructors.filter(inva=>inva.isIfr)
        //     possibleAcfts = aircrafts.filter(acft=>acft.model === "seneca")

        // }
        
        // // Check for night
        // const isNight = flights.filter(flight => flight.mission.isNight)
        // if (isNight) {}

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
        flights.forEach( (flight) => {
            const flightTimeIndex = SLOTS.indexOf(flight.time);
            const isNightFlight = flight.time === "night"; //Alterar posteriormente para flight.mission.isNight
            const twoSlots = flight.mission.slots > 1;
            let selectedInva;

            if (flight.status === FLIGHT_STATUS.CANCELED) return;
            
            if (flight.mission.isSolo) {
                if (flight.student.isSolo && flight.student.isSoloValid) return flight.status = FLIGHT_STATUS.CONFIRMED;
                if (flight.student.isSolo && !flight.student.isSoloValid) {
                    flight.status = FLIGHT_STATUS.CANCELED;
                    flight.description.push(`Solo flight is not valid.`)
                    return
                }
                else {
                    flight.status = FLIGHT_STATUS.CANCELED;
                    flight.description.push(`This student don't is authorized to fly solo`)
                    return
                }
            }

            if (flight.mission.isMlte || flight.aircraftModel === "seneca") {
                if (twoSlots) {
                    selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.availability[SLOTS[flightTimeIndex + 1]] && inva.isMlte);
                    if (selectedInva) {
                        selectedInva.availability[flight.time] = false;
                        selectedInva.availability[SLOTS[flightTimeIndex + 1]] = false;
                        flight.instructor = selectedInva;
                        flight.status = FLIGHT_STATUS.CONFIRMED;
                        return
                    } else {
                        flight.status = FLIGHT_STATUS.CANCELED;
                        flight.description.push(`There isn't available instructor.`)
                        return
                    }
                } else {
                    selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.isMlte);
                    if (selectedInva) {
                        selectedInva.availability[flight.time] = false;
                        flight.instructor = selectedInva;
                        flight.status = FLIGHT_STATUS.CONFIRMED
                        return
                    } else {
                        flight.status = FLIGHT_STATUS.CANCELED;
                        flight.description.push(`There isn't available instructor.`)
                        return
                    }
                }
                
            }

            if (isNightFlight) selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.isNight);
            if (flight.mission.isCheckride && !twoSlots) selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.isCheckride);
            if (flight.mission.isCheckride && twoSlots) selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.availability[SLOTS[flightTimeIndex + 1]] && inva.isCheckride);
            if (flight.mission.isIfr && !twoSlots) selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.isIfr);
            if (flight.mission.isIfr && twoSlots) selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.availability[SLOTS[flightTimeIndex + 1]] && inva.isIfr);
            if (!twoSlots && !isNightFlight) selectedInva = instructors.find(inva => inva.availability[flight.time]);
            if (twoSlots && !isNightFlight) {
                selectedInva = instructors.find(inva => inva.availability[flight.time] && inva.availability[SLOTS[flightTimeIndex + 1]]);
            }

            if (selectedInva) {
                if (isNightFlight || !twoSlots) {
                    selectedInva.availability[flight.time] = false;
                    flight.instructor = selectedInva;
                    flight.status = FLIGHT_STATUS.CONFIRMED;
                } else {
                    selectedInva.availability[flight.time] = false;
                    selectedInva.availability[SLOTS[flightTimeIndex + 1]] = false;
                    flight.instructor = selectedInva;
                    flight.status = FLIGHT_STATUS.CONFIRMED;
                }
            } else {
                flight.status = FLIGHT_STATUS.CANCELED;
                flight.description.push(`No available instructor for this flight.`)
            }

        })
    };

    static distributeAcft (flights, aircrafts) {
        flights.forEach(flight => {
            const flightTimeIndex = SLOTS.indexOf(flight.time);
            const isNightFlight = flight.time === "night"; //Alterar posteriormente para flight.mission.isNight
            const twoSlots = flight.mission.slots > 1;
            const isSoloFlight = flight.mission.isSolo;
            let possibleAcfts;
            let selectedAcft

            // Check if student have ground school;
            if (!flight.student.aircraftsGrounds[flight.aircraftModel]) {
                flight.status = FLIGHT_STATUS.CANCELED;
                flight.description.push(`This student don't has the ${flight.aircraftModel} ground school`)
                return
            }

            // Check if flight is Solo;
            if (isSoloFlight && !flight.student.isSolo) {
                flight.status = FLIGHT_STATUS.CANCELED;
                flight.description.push(`This student is not authorized to fly solo.`)
                return
            }
            
            // Check if flight is IFR;
            // Check if aircraft fly at night
            possibleAcfts = aircrafts.filter((acft)=>{
                if (flight.mission.isIfr) {
                    return acft.model === flight.aircraftModel && acft.isIfr
                }
                if (isNightFlight) {
                    return acft.model === flight.aircraftModel && acft.isNight
                }
                return acft.model === flight.aircraftModel
            });

            if (isNightFlight) selectedAcft = possibleAcfts.find(acft => acft.dailySchedule[flight.time] && acft.isNight);
            if (!twoSlots && !isNightFlight) selectedAcft = possibleAcfts.find(acft => acft.dailySchedule[flight.time]);
            if (twoSlots && !isNightFlight) {
                selectedAcft = possibleAcfts.find(acft => acft.dailySchedule[flight.time] && acft.dailySchedule[SLOTS[flightTimeIndex + 1]]);
            }

            if (selectedAcft) {
                if (isNightFlight || !twoSlots) {
                    selectedAcft.dailySchedule[flight.time] = false;
                    flight.bookedAircraft = selectedAcft
                } else {
                    selectedAcft.dailySchedule[flight.time] = false;
                    selectedAcft.dailySchedule[SLOTS[flightTimeIndex + 1]] = false
                    flight.bookedAircraft = selectedAcft
                }
            } else {
                flight.status = FLIGHT_STATUS.CANCELED;
                flight.description.push(`There is no ${flight.aircraftModel} available.`)
            }

        })
    }
}

module.exports = Service;