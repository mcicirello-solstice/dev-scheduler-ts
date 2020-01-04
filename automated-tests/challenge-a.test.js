const dataProvider = require("../data-provider");
const main = require("../index");

describe("challenge a", () => {
  test("tasks completed in 6 hours", () => {
    const results = main.challengeA(dataProvider.getOnboardingTasks(), 6);
    expect(results).toEqual(expect.arrayContaining(["Consulting Onboarding"]));
  });
});
