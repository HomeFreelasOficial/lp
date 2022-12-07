export class Job {
  constructor(
    readonly id: string,
    readonly clientId: string,
    readonly professionalId: string,
    readonly description: string,
    readonly title: string,
    readonly type: { id: number, name: string },
    readonly price: number,
    readonly address: string,
    readonly clientName: string,
    readonly clientPicture: string,
    readonly paid: boolean = false,
  ) {}
}