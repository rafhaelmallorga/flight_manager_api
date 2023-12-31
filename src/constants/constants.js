const MISSIONS = {
    "PP": {
        "PS": {
            "1": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "2": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "3": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "4": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "5": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "6": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "7": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "8": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "9": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "10": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "11": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "12": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "13": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "14": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "15": {
                slots: 1,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
        },
        "SL": {
            "1": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: true,
                isCheckride: false
            },
        },
        "AP": {
            "1": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "2": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "3": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "4": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "5": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "6": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "7": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "8": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "9": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "10": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
        },
        "NV": {
            "1": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "2": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: true,
                isCheckride: false
            },
            "3": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: false,
                isCheckride: false
            },
            "4": {
                slots: 2,
                isIfr: false,
                isNight: false,
                isSolo: true,
                isCheckride: false
            },
        },
        "NT": {
            "1": {
                slots: 1,
                isIfr: false,
                isNight: true,
                isSolo: false,
                isCheckride: false
            },
            "2": {
                slots: 1,
                isIfr: false,
                isNight: true,
                isSolo: false,
                isCheckride: false
            },
            "3": {
                slots: 1,
                isIfr: false,
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
        model: "cherokee",
        icaoCode: "p28a",
        hourPrice: 565,
        registrations: ["PT-IZO", "PT-IZQ", "PT-IZS", "PT-IZN"]
    },
    tupi: {
        manufacturer: "Embraer",
        model: "tupi",
        icaoCode: "p28a",
        hourPrice: 630,
        registrations: ["PT-NUU", "PT-NVB", "PT-RXC", "PT-NXS", "PT-NYJ"]
    },
    da20: {
        manufacturer: "Diamond",
        model: "da20",
        icaoCode: "da20",
        hourPrice: 700,
        registrations: ["PR-ASP", "PR-DDB", "PR-SAO", "PR-SAU"]
    },
    da40: {
        manufacturer: "Diamond",
        model: "da40",
        icaoCode: "da40",
        hourPrice: 790,
        registrations: ["PR-IVF"]
    },
    corisco: {
        manufacturer: "Embraer",
        model: "corisco",
        icaoCode: "p28r",
        hourPrice: 770,
        registrations: ["PT-NKH"]
    },
    seneca: {
        manufacturer: "Piper",
        model: "seneca",
        icaoCode: "pa34",
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