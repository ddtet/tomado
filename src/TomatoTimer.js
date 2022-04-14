module.exports = class TomatoTimer {
  constructor(taskName, timeLength) {
    this.taskName = taskName;
    this.length = (timeLength || 25 * 60) * 1000;
    this.timeLog = [];
    this.status = "stop";
  }

  start() {
    return this;
  }
};
