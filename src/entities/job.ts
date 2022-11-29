export class Job {
  constructor(
    readonly jobId: string,
    readonly clientId: string,
    readonly professionalId: string,
    readonly description: string,
    readonly title: string,
    readonly typeId: number,
    readonly price: number,
  ) {}
}