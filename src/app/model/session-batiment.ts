import { Batiment } from './batiment';
import { Session } from "./session";

export class SessionBatiment {

  constructor(
    private _pv: number,
    private _ptAttaque: number,
    private _session: Session,
    private _batiment: Batiment,
    private _level: number,
    private _used?: boolean,
    private _id?: number) {
  }


  public get id(): number | undefined {
    return this._id;
  }

  public set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Getter pv
   * @return {number}
   */
  public get pv(): number {
    return this._pv;
  }

  /**
   * Getter ptAttaque
   * @return {number}
   */
  public get ptAttaque(): number {
    return this._ptAttaque;
  }

  /**
   * Getter session
   * @return {Session}
   */
  public get session(): Session {
    return this._session;
  }

  /**
   * Getter batiment
   * @return {Batiment}
   */
  public get batiment(): Batiment {
    return this._batiment;
  }

  /**
   * Getter level
   * @return {number}
   */
  public get level(): number {
    return this._level;
  }

  /**
   * Getter used
   * @return {boolean}
   */
  public get used(): boolean | undefined {
    return this._used;
  }

  /**
   * Setter pv
   * @param {number} value
   */
  public set pv(value: number) {
    this._pv = value;
  }

  /**
   * Setter ptAttaque
   * @param {number} value
   */
  public set ptAttaque(value: number) {
    this._ptAttaque = value;
  }

  /**
   * Setter session
   * @param {Session} value
   */
  public set session(value: Session) {
    this._session = value;
  }

  /**
   * Setter batiment
   * @param {Batiment} value
   */
  public set batiment(value: Batiment) {
    this._batiment = value;
  }

  /**
   * Setter level
   * @param {number} value
   */
  public set level(value: number) {
    this._level = value;
  }

  /**
   * Setter used
   * @param {boolean} value
   */
  public set used(value: boolean | undefined) {
    this._used = value;
  }


}
