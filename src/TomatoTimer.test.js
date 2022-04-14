const TomatoTimer = require("./TomatoTimer");

describe("Keep info", () => {
  it("should has default value", () => {});

  it("remember task name and length of countdown", () => {
    const taskName1 = "Practice coding...";

    const timer1 = new TomatoTimer(taskName1, 500);
    expect(timer1.taskName).toEqual(taskName1);
    expect(timer1.length).toEqual(500000);
  });
});

describe("TomatoTimer start", () => {
  it("Should return self after called start method", () => {
    const timer = new TomatoTimer();
    expect(timer.start()).toEqual(timer);
  });
});
