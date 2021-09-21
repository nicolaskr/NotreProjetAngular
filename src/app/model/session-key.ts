import { Compte } from './compte';
import { Partie } from './partie';
export class SessionKey {

  constructor(private _partie ?: Partie, private _compte ?: Compte){}

  public get partie(): Partie | undefined {
    return this._partie;
  }

  public set partie(value: Partie | undefined) {
    this._partie = value;
  }

  public get compte(): Compte | undefined {
    return this._compte;
  }

  public set compte(value: Compte | undefined) {
    this._compte = value;
  }
}
