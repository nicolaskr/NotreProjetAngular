import { Session } from './session';

export class Partie {
  constructor(
    private _id?: number,
    private _description?: string,
    private _sessions?: Session[]
  ) {}
  /**
   * Getter id
   * @return {number}
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number | undefined) {
    this._id = value;
  }

  public get description(): string | undefined {
    return this._description;
  }

  public set description(value: string | undefined) {
    this._description = value;
  }

  public get sessions(): Session[] | undefined {
    return this._sessions;
  }

  public set sessions(value: Session[] | undefined) {
    this._sessions = value;
  }
}
