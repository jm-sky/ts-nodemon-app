import 'module-alias/register';
import { Greeter } from '@/greeter';
import { config } from '@/config';

const greeter = new Greeter(config);

setInterval(() => greeter.greet(), config.interval);
