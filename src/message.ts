import dayjs from 'dayjs';
import { uuid } from 'uuidv4';
import { IMessage } from './types/index.js';

export const createMessage = (message: string): IMessage => {
  return {
    id: uuid(),
    message,
    date: dayjs().format('HH:mm:ss'),
  };
};
