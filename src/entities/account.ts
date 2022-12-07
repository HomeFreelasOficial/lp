export class Account {
  constructor(
    readonly id: string,
    readonly userId: string,
    readonly type: string,
    readonly name: string,
    readonly picture: string,
    readonly jobTypes: { id: number, name: string }[],
    readonly perhour?: number,
  ){}
}