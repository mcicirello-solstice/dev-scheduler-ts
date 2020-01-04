const fs = require("fs");

module.exports = {
  getOnboardingTasks: () => {
    return loadDataSync("onboarding.json").tasks;
  },
  getCourses: () => {
    return loadDataSync("courses.json").courses;
  },
  getStories: () => {
    return loadDataSync("stories.json").stories;
  }
};

loadDataSync = fileName =>
  JSON.parse(fs.readFileSync(`./data-sources/${fileName}`, "utf8"));
