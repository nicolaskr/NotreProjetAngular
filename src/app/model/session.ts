import { SessionKey } from './session-key';
import { Partie } from './partie';
import { SessionRessource } from './session-ressource';
import { SessionBatiment } from './session-batiment';
import { Compte } from './compte';
export class Session {
  constructor(
    private _id: SessionKey,
    private _def: number,
    private _att: number,
    private _sessionBatiment: SessionBatiment[],
    private _sessionRessource: SessionRessource[],
    private _tourEnCours: boolean
  ) {}

  /**
   * Getter compte
   * @return {Compte}
   */
  public get id(): SessionKey {
    return this._id;
  }

  public get tourEnCours(): boolean {
    return this._tourEnCours;
  }

  /**
   * Getter def
   * @return {number}
   */
  public get def(): number {
    return this._def;
  }

  /**
   * Getter listBatiments
   * @return {SessionBatiment[]}
   */
  public get sessionBatiment(): SessionBatiment[] {
    return this._sessionBatiment;
  }
  /**
   * Getter att
   * @return {number}
   */
  public get att(): number {
    return this._att;
  }

  /**
   * Getter listRessources
   * @return {SessionRessource []}
   */
  public get sessionRessource(): SessionRessource[] {
    return this._sessionRessource;
  }

  /**
   * Setter compte
   * @param {Compte} value
   */
  public set id(value: SessionKey) {
    this._id = value;
  }

  public set tourEnCours(value: boolean) {
    this._tourEnCours = value;
  }

  /**
   * Setter def
   * @param {number} value
   */
  public set def(value: number) {
    this._def = value;
  }

  /**
   * Setter listBatiments
   * @param {SessionBatiment[]} value
   */
  public set sessionBatiment(value: SessionBatiment[]) {
    this._sessionBatiment = value;
  }
  /**
   * Setter att
   * @param {number} value
   */
  public set att(value: number) {
    this._att = value;
  }

  /**
   * Setter listRessources
   * @param {SessionRessource []} value
   */
  public set sessionRessource(value: SessionRessource[]) {
    this._sessionRessource = value;
  }
}
