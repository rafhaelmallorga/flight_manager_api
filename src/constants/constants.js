const MISSIONS = {
    "PP": {
        "PS": {
            "1": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "2": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "3": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "4": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "5": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "6": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "7": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "8": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "9": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "10": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "11": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "12": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "13": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "14": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "15": {
                slots: 1,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
        },
        "SL": {
            "1": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: true,
                isCheckride: false
            },
        },
        "AP": {
            "1": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "2": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "3": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "4": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "5": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "6": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "7": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "8": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "9": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "10": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
        },
        "NV": {
            "1": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "2": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: true,
                isCheckride: false
            },
            "3": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "4": {
                slots: 2,
                isVfr: true,
                isNight: false,
                isSolo: true,
                isCheckride: false
            },
        },
        "NT": {
            "1": {
                slots: 1,
                isVfr: true,
                isNight: true,
                isSolo: false,
                isCheckride: false
            },
            "2": {
                slots: 1,
                isVfr: true,
                isNight: true,
                isSolo: false,
                isCheckride: false
            },
            "3": {
                slots: 1,
                isVfr: true,
                isNight: true,
                isSolo: false,
                isCheckride: false
            },
        }
    },
    "PC": {
    }
};

const INSPECTIONS = ["50", "100"];

const AIRCRAFTS = {
    cherokee: {
        manufacturer: "Piper",
        model: "Cherokee",
        icaoCode: "P28A-140",
        hourPrice: 565,
        registrations: ["PT-IZO", "PT-IZQ", "PT-IZS", "PT-IZN"]
    },
    tupi: {
        manufacturer: "Embraer",
        model: "Tupi",
        icaoCode: "P28A-180",
        hourPrice: 630,
        registrations: ["PT-NUU", "PT-NVB", "PT-RXC", "PT-NXS", "PT-NYJ"]
    },
    da20: {
        manufacturer: "Diamond",
        model: "DA-20",
        icaoCode: "DA20",
        hourPrice: 700,
        registrations: ["PR-ASP", "PR-DDB", "PR-SAO", "PR-SAU"]
    },
    da40: {
        manufacturer: "Diamond",
        model: "DA-40",
        icaoCode: "DA40",
        hourPrice: 790,
        registrations: ["PR-IVF"]
    },
    corisco: {
        manufacturer: "Embraer",
        model: "Corisco",
        icaoCode: "P28R",
        hourPrice: 770,
        registrations: ["PT-NKH"]
    },
    seneca: {
        manufacturer: "Piper",
        model: "Seneca",
        icaoCode: "PA34",
        hourPrice: 1300,
        registrations: ["PR-FTX"]
    }
}

FLIGHT_STATUS = {
    PENDING: "pending",
    CONFIRMED: "confirmed",
    COMPLETED: "completed",
    CANCELED: "canceled"
}

SLOTS = ["six", "eight", "ten", "twelve", "fourteen", "night"]

module.exports = { MISSIONS, INSPECTIONS, AIRCRAFTS, FLIGHT_STATUS, SLOTS }