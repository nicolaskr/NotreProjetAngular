import { Compte } from './compte';
import { Partie } from './partie';
export class SessionKey {
  constructor(private _partie: Partie, private _compte: Compte) {}

  public get partie(): Partie {
    return this._partie;
  }

  public set partie(value: Partie) {
    this._partie = value;
  }

  public get compte(): Compte {
    return this._compte;
  }

  public set compte(value: Compte) {
    this._compte = value;
  }
}
