import * as fs from "fs";

export class DataProvider {
  public getOnboardingTasks() {
    return this.loadDataSync("onboarding.json").tasks;
  }

  public getCourses() {
    return this.loadDataSync("courses.json").courses;
  }

  public getStories() {
    return this.loadDataSync("stories.json").stories;
  }

  private loadDataSync(fileName: string): any {
    return JSON.parse(fs.readFileSync(`./data-sources/${fileName}`, "utf8"));
  }
}
