import { Session } from '../model/session';

export class PartieDto {
  constructor(
    private id?: number,
    private description?: string,
    private sessions?: Session[]
  ) {}

  public get $id(): number | undefined {
    return this.id;
  }

  public set $id(value: number | undefined) {
    this.id = value;
  }

  public get $description(): string | undefined {
    return this.description;
  }

  public set $description(value: string | undefined) {
    this.description = value;
  }

  public get $sessions(): Session[] | undefined {
    return this.sessions;
  }

  public set $sessions(value: Session[] | undefined) {
    this.sessions = value;
  }
}
