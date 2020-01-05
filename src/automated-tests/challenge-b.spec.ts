import { DataProvider } from "../data-provider";
import { SchedulingService } from "../scheduling-service";

const service = new SchedulingService();
const dataProvider = new DataProvider();

describe("challenge b", () => {
  //TIP: Call service.challengeB
  test("tasks completed in 10 hours", () => {
    const results = service.challengeB(
      dataProvider.getCourses(),
      dataProvider.getStories(),
      10
    );
    expect(results).toEqual(expect.arrayContaining(["Hot fix"]));
  });

  test("tasks completed in 20 hours", () => {
    const results = service.challengeB(
      dataProvider.getCourses(),
      dataProvider.getStories(),
      20
    );
    expect(results).toEqual(expect.arrayContaining(["Hot fix", "Feature 1"]));
  });

  test("tasks completed in 40 hours", () => {
    const results = service.challengeB(
      dataProvider.getCourses(),
      dataProvider.getStories(),
      40
    );
    expect(results).toEqual(
      expect.arrayContaining(["Hot fix", "Feature 1", "TDD"])
    );
  });

  test("tasks completed in 80 hours", () => {
    const results = service.challengeB(
      dataProvider.getCourses(),
      dataProvider.getStories(),
      80
    );
    expect(results).toEqual(
      expect.arrayContaining([
        "Hot fix",
        "Feature 1",
        "Feature 2",
        "TDD",
        "Docker"
      ])
    );
  });
});
