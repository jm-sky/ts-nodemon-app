import { config } from '@/config'
import { Config } from '@/types'

export class Greeter {
  name: string

  constructor(options: Config) {
    this.name = options.appName ?? 'Unknown'
  }

  greet() {
    console.log('+--------------------------------+')
    console.log('| Hello from', this.name)
    console.log('+--------------------------------+')
    console.log('| Config:')
    console.log('| - appName:', config.appName)
    console.log('| - interval:', config.interval)
    console.log('+--------------------------------+')
  }
}
