import { Session } from './session';
export class Partie {
  constructor(private _id: number, private _sessions: Session[]) {}
  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  public get sessions(): Session[] {
    return this._sessions;
  }
  public set sessions(value: Session[]) {
    this._sessions = value;
  }
}
