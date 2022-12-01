export class Account {
  constructor(
    readonly id: string,
    readonly userId: string,
    readonly type: string,
    readonly name: string,
    readonly perhour?: number,
  ){}
}