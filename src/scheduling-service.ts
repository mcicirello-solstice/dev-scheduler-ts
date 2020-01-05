const UNITS = {
  HOURS: 1,
  DAYS: 8
};

export class SchedulingService {
  public challengeA(onboardingTasks, timeLimit: number): string[] {
    //TODO This should return an array with the names of the tasks fully completed
    let elapsedTime = 0;
    return onboardingTasks
      .sort((a, b) => a.duration - b.duration)
      .filter(task => {
        if (elapsedTime + task.duration <= timeLimit) {
          elapsedTime += task.duration;
          return true;
        }
        return false;
      })
      .map(x => x.name);
  }

  public challengeB(courses, stories, timeLimit: number): string[] {
    //TODO This should return an array with the names of the stories and courses fully completed
    let elapsedTime = 0;
    return stories
      .sort(
        (a, b) =>
          a.duration * UNITS[a.unitOfTime] - b.duration * UNITS[b.unitOfTime]
      )
      .filter(task => {
        if (elapsedTime + task.duration <= timeLimit) {
          elapsedTime += task.duration;
          return true;
        }
        return false;
      })
      .concat(
        courses
          .sort(
            (a, b) =>
              a.duration * UNITS[a.unitOfTime] -
              b.duration * UNITS[b.unitOfTime]
          )
          .filter(task => {
            if (elapsedTime + task.duration <= timeLimit) {
              elapsedTime += task.duration;
              return true;
            }
            return false;
          })
      )
      .map(x => x.name);
  }

  public challengeC(courses, stories): number {
    //TODO This should return a number with the amount of hours required to complete all stories considering its dependecies
    const selectedTasks = {};
    const allTasks = stories.concat(courses);

    stories.forEach(task => {
      const tasksRequired = this.getTasksRequiredToExecute(allTasks, task, {
        ...selectedTasks
      });
      tasksRequired
        .filter(taskRequired => !selectedTasks[taskRequired.name])
        .forEach(taskRequired => {
          selectedTasks[taskRequired.name] = taskRequired;
        });
    });

    return Object.values(selectedTasks)
      .map((task: any) => task.duration * UNITS[task.unitOfTime])
      .reduce((a, b) => a + b);
  }

  /**
   * Explores tree and combines with already explored nodes
   * returns all explored nodes
   */
  private getTasksRequiredToExecute(allTasks, task, evaluated = {}): any {
    evaluated[task.name] = task;

    if (task.dependencies) {
      task.dependencies.forEach(dependency => {
        if (!evaluated[dependency]) {
          const dependencyTask = allTasks.find(
            taskToFind => taskToFind.name === dependency
          );
          this.getTasksRequiredToExecute(allTasks, dependencyTask, evaluated);
        }
      });
    }

    return Object.values(evaluated).filter(x => x);
  }
}
