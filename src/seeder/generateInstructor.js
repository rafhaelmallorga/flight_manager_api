const Instructor = require("../classes/instructor")
const {faker} = require("@faker-js/faker");
const fs = require("fs");

const generateInstructor = () => {
    const instructors = [];
    // const phases = ["PS", "AP", "NV", "NT"]

    for (let i = 0; i < 10; i++) {
        const instructor = new Instructor({
            fullName: faker.person.fullName(),
            nickname: faker.person.lastName(),
            isCheckride: faker.datatype.boolean(0.15),
            isVfr: true,
            isIfr: faker.datatype.boolean(0.3),
            isMnte: true,
            isMlte: faker.datatype.boolean(0.2),
            isNight: faker.datatype.boolean(0.6),
            canSolo: faker.datatype.boolean(0.5),
            aircrafts: {
                cherokee: true,
                tupi: true,
                da20: faker.datatype.boolean(0.4),
                da40: faker.datatype.boolean(0.3),
                corisco: faker.datatype.boolean(0.2),
                seneca: faker.datatype.boolean(0.1)
            },
            availability: {
                six: faker.datatype.boolean(0.3),
                eight: true,
                ten: true,
                twelve: true,
                fourteen: true,
                night: false
              }
        })

        instructor.availability.night = instructor.isNight

        instructors.push(instructor)
    }

    fs.writeFile("src/database/instructorsDb.json", JSON.stringify(instructors), "utf-8", err => {
        if (err) console.error(err)
    })
}

generateInstructor();