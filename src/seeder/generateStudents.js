const Student = require("../classes/student")
const {faker} = require("@faker-js/faker");
const fs = require("fs");

const generateStudents = () => {
    const students = [];
    const phases = ["PS", "AP", "NV", "NT"]

    for (let i = 0; i < 20; i++) {
        const student = new Student({
            fullName: faker.person.fullName(),
            nickname: faker.person.lastName(),
            course: "PP",
            phase: phases[faker.number.int({min: 0, max: 3})],
            currentMission: faker.number.int({min: 1, max: 3}),
            isSolo: faker.datatype.boolean(),
            soloExpires: null,
            isSoloValid: false,
            lastFlightDate: faker.date.recent({days: 15}),
            aircraftsGrounds: {
                cherokee: true,
                tupi: true,
                da20: faker.datatype.boolean(0.4),
                da40: faker.datatype.boolean(0.3),
                corisco: faker.datatype.boolean(0.2),
                seneca: faker.datatype.boolean(0.1)
            }
        })

        if (student.isSolo) {
            student.soloExpires = faker.date.soon({ days: 30})
            student.isSoloValid = student.checkIfSoloIsValid()
        }


        students.push(student)
    }

    fs.writeFile("src/database/studentsDb.json", JSON.stringify(students), "utf-8", err => {
        if (err) console.error(err)
    })
}

generateStudents();