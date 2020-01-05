import { DataProvider } from "../data-provider";
import { SchedulingService } from "../scheduling-service";

const service = new SchedulingService();
const dataProvider = new DataProvider();

describe("challenge a", () => {
  test("tasks completed in 6 hours", () => {
    const results = service.challengeA(dataProvider.getOnboardingTasks(), 6);
    expect(results).toEqual(expect.arrayContaining(["Consulting Onboarding"]));
  });

  test("tasks completed in 20 hours", () => {
    const results = service.challengeA(dataProvider.getOnboardingTasks(), 20);
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
    const results = service.challengeA(dataProvider.getOnboardingTasks(), 40);
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
