// @ts-check

import { log } from 'console';
import './person.js';

export class Greeter {
  person;

  /**
   * @param {Person} person 
   */
  constructor(person) {
    this.person = person;
  }

  /**
   * Logs grerting to console.
   * 
   * @param {String} name - Who should we greet?
   * @returns {void}
   */
  greet(name) {
    log(`Hello ${name}`, 'I am', this.person.name);
  }
}
