import { LowSync } from 'lowdb';
import { JSONFileSyncPreset } from 'lowdb/node';
import { DbSchema, IMessage, TMessageType } from './types/index.js';

const defaultData: DbSchema = {
  messages: {
    demo: [],
  },
};

class Db {
  private db: LowSync<DbSchema>;

  constructor() {
    this.db = JSONFileSyncPreset<DbSchema>('db.json', defaultData);
  }

  getData(): DbSchema {
    return this.db.data;
  }

  messages(type: TMessageType): IMessage[] {
    return this.db.data.messages[type];
  }

  save(): void {
    this.db.write();
  }
}

export const db = new Db();
