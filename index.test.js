const dataProvider = require("./data-provider");
const main = require("./index");

describe("sample tests", () => {
  it("should test a value", () => {
    const myValue = "myStringValue";
    expect(myValue).toBe("myStringValue");
  });

  it("should test an object", () => {
    const myObject = { id: 1, name: "foo" };
    expect(myObject).toEqual({ id: 1, name: "foo" });
  });

  it("should test an array", () => {
    const myArray = ["value1", "value2"];
    expect(myArray).toEqual(expect.arrayContaining(["value2", "value1"]));
  });
});

describe("challenge a", () => {
  //TIP: Call main.challengeA
  test("tasks completed in 6 hours", () => {
    const results = main.challengeA(dataProvider.getOnboardingTasks(), 6);
    expect(results).toEqual(expect.arrayContaining(["Consulting Onboarding"]));
  });

  test("tasks completed in 20 hours", () => {
    const results = main.challengeA(dataProvider.getOnboardingTasks(), 20);
    expect(results).toEqual(
      expect.arrayContaining([
        "Consulting Onboarding",
        "Agile",
        "Solstie 101",
        "Mentorship Onboarding"
      ])
    );
  });

  test("tasks completed in 40 hours", () => {
    const results = main.challengeA(dataProvider.getOnboardingTasks(), 40);
    expect(results).toEqual(
      expect.arrayContaining([
        "Consulting Onboarding",
        "Agile",
        "Solstie 101",
        "Mentorship Onboarding",
        "CXDD Onboarding",
        "XP Onboarding",
        "Engineering Onboarding"
      ])
    );
  });
});
