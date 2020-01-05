const UNITS = {
  HOURS: 1,
  DAYS: 8
};

export class SchedulingService {
  public challengeA(onboardingTasks, timeLimit: number): string[] {
    //TODO This should return an array with the names of the tasks fully completed
    return null;
  }

  public challengeB(courses, stories, timeLimit: number): string[] {
    //TODO This should return an array with the names of the stories and courses fully completed
    return null;
  }

  public challengeC(courses, stories): number {
    //TODO This should return a number with the amount of hours required to complete all stories considering its dependecies
    return 0;
  }
}
