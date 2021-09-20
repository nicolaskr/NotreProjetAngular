import { Ressource } from './ressource';
import { Batiment } from './batiment';
export class TransformationRessource {

  constructor(private _transformation: Batiment, private _ressourceLost: Ressource, private _ressourceWin: Ressource, private _id: number,) { }

  public get transformation(): Batiment {
    return this._transformation;
  }

  public set transformation(value: Batiment) {
    this._transformation = value;
  }

  public get ressourceLost(): Ressource {
    return this._ressourceLost;
  }

  public set ressourceLost(value: Ressource) {
    this._ressourceLost = value;
  }

  public get ressourceWin(): Ressource {
    return this._ressourceWin;
  }

  public set ressourceWin(value: Ressource) {
    this._ressourceWin = value;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }


}
