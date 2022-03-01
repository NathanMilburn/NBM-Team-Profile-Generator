const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Can set school through constructor", () => {
    const testValue = "Oregon";
    const e = new Intern("Nate", 1, "email@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Nate", 1, "email@test.com", "Oregon");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "Oregon";
    const e = new Intern("Nate", 1, "email@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});