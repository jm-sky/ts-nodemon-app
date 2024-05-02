export type TMessageType = 'demo'

export interface IMessage {
  id: string
  message: string
  date: string
}

export type MessagesMap = Record<TMessageType, IMessage[]>

export interface DbSchema {
  messages: MessagesMap
}
