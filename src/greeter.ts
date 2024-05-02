import chalk from 'chalk';
import { config } from './config.js';
import { db } from './db.js';
import { Config, IMessage } from './types/index.js';

export class Greeter {
  name: string;

  constructor(options: Config) {
    this.name = options.appName ?? 'Unknown';
  }

  greet() {
    console.log('+--------------------------------+');
    console.log('| Hello from', this.name);
    console.log('+--------------------------------+');
    console.log('| Config:');

    Object.keys(config).forEach(key => console.log('| - ', key, config[key]));

    console.log('+--------------------------------+');
    console.log('| We have got', db.messages('demo').length, 'demo messages');
    console.log('+--------------------------------+');
  }

  showMessage(message: IMessage) {
    console.log(chalk.blue(' >'));
    console.log(chalk.blue(` |  MESSAGE #${message.id}`));
    console.log(chalk.blue(' |  ', message.message));
    console.log(chalk.blue(' |  - date: ', message.date));
    console.log(chalk.blue(' >'));
    console.log('');
  }
}
