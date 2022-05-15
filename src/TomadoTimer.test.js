const TomadoTimer = require('./TomadoTimer');

describe('Keep info', () => {
  it('could set task name and time length for countdown', () => {
    const taskName = 'Test Job';
    const timeLength = 30;

    const timer = new TomadoTimer(taskName, timeLength);
    expect(timer.taskName).toEqual(taskName);
    expect(timer.length).toEqual(timeLength * 60 * 1000);
  });

  it('has default time length for 25 minutes ', () => {
    const timer = new TomadoTimer();
    expect(timer.taskName).toEqual('');
    expect(timer.length).toEqual(25 * 60 * 1000);
  });
});

describe('timer start', () => {
  it('Should return self after called start method', () => {
    const timer = new TomadoTimer();
    const startHandler = jest.fn();

    timer.on(TomadoTimer.Event.START, startHandler);
    expect(timer.start()).toEqual(timer);
    expect(startHandler).toHaveBeenCalled();
  });
});
