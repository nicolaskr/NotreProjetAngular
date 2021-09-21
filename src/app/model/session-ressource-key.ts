import { Ressource } from './ressource';
import { Session } from './session';

export class SessionRessourceKey {
  constructor(private _ressource: Ressource, private _session: Session) {}

  /**
   * Getter ressource
   * @return {Ressource}
   */
  public get ressource(): Ressource {
    return this._ressource;
  }

  /**
   * Getter session
   * @return {Session}
   */
  public get session(): Session {
    return this._session;
  }

  /**
   * Setter ressource
   * @param {Ressource} value
   */
  public set ressource(value: Ressource) {
    this._ressource = value;
  }

  /**
   * Setter session
   * @param {Session} value
   */
  public set session(value: Session) {
    this._session = value;
  }
}
