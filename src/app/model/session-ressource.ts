import { SessionRessourceKey } from './session-ressource-key';
import { Ressource } from './ressource';
import { Session } from './session';

export class SessionRessource {
  constructor(private _quantite: number, private _id: SessionRessourceKey) {}

  /**
   * Getter quantite
   * @return {number}
   */
  public get quantite(): number {
    return this._quantite;
  }

  public get id(): SessionRessourceKey {
    return this._id;
  }

  /**
   * Setter quantite
   * @param {number} value
   */
  public set quantite(value: number) {
    this._quantite = value;
  }
  public set id(value: SessionRessourceKey) {
    this._id = value;
  }
}
