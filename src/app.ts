import { Greeter } from './greeter.js';
import { config } from './config.js';
import { createMessage } from './message.js';
import { db } from './db.js';

const greeter = new Greeter(config);
const state = {
  counter: 0,
  maxExecutions: 4,
};

const createAndSaveMessage = () => {
  const message = createMessage(state.counter % 2 ? 'Hello, whats Your name?' : 'My name is Micke, and You are?');

  greeter.showMessage(message);

  db.messages('demo').unshift(message);
  db.save();
};

const finish = (intervalId: NodeJS.Timeout) => {
  console.log('+------------------------+');
  console.log('| Finished at', state.counter);
  console.log('+------------------------+');
  clearInterval(intervalId);
};

//----------------------------------------------------------------------------

const start = () => {
  greeter.greet();
  createAndSaveMessage();
  
  const intervalId: NodeJS.Timeout = setInterval(() => {
    createAndSaveMessage();
  
    state.counter++;
  
    if (state.counter >= state.maxExecutions) finish(intervalId);
  
  }, config.interval);
};

export const app = {
  start,
};
