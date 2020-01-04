const dataProvider = require("../data-provider");
const main = require("../index");

describe("challenge c", () => {
  //TIP: Call main.challengeC
  test("all tasks should be completed in 6 hours", () => {
    const totalAmmountOfTime = main.challengeC(
      dataProvider.getCourses(),
      dataProvider.getStories()
    );
    /*
    Feature 1       - 16
        Java        - 30
        TDD         - 10
        =                   - 56
    Hot fix         - 4
        Angular     - 25
        =                   - 29
    Feature 2       - 24
        Java        - 0
        Feature 1   - 0
        Docker      - 15
            Java    - 0
        =                   - 39
    */
    expect(totalAmmountOfTime).toBe(124);
  });
});
