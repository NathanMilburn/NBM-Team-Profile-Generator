const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Can set up GitHub account through the constructor", () => {
    const testValue = "NathanMilburn";
    const e = new Engineer("Nathan", 1, "email@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Nathan", 1, "email@test.com", "NathanMilburn");
    expect(e.getRole()).toBe(testValue);
});

test("Getting GitHub user name through getGitHub()", () => {
    const testValue = "GitHubUsername";
    const e = new Engineer("Nate", 1, "email@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});