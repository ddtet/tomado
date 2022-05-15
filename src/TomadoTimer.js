const { EventEmitter } = require('events');

class TomadoTimer extends EventEmitter {
  constructor(taskName, timeLength) {
    super();
    this.taskName = taskName || '';
    this.length = (timeLength || 25) * 60 * 1000;
    this.timeLog = [];
    this.status = 'stop';
  }

  start() {
    this.emit(TomadoTimer.Event.START);
    return this;
  }
}

TomadoTimer.Event = {
  START: 'tomadoTimer_start',
};

module.exports = TomadoTimer;
