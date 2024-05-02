// @ts-check

import { Greeter } from './greeter.js';

/**
 * @type {Person}
 */
const person = {
  name: 'John',
  age: 20,
  adult: true,
};

const greeter = new Greeter(person);

greeter.greet('Max');
