import { Batiment } from './batiment';
import { Session } from "./session";

export class SessionBatiment {

  constructor(
    private _pointsDeVie: number,
    private _pointsDAttaque: number,
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
  public get pointsDeVie(): number {
    return this._pointsDeVie;
  }

  /**
   * Getter ptAttaque
   * @return {number}
   */
  public get pointsDAttaque(): number {
    return this._pointsDAttaque;
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
  public set pointsDeVie(value: number) {
    this._pointsDeVie = value;
  }

  /**
   * Setter ptAttaque
   * @param {number} value
   */
  public set pointsDAttaque(value: number) {
    this._pointsDAttaque = value;
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
