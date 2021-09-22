import { Ressource } from 'src/app/model/ressource';
export class TransformationRessourceDto {

  constructor(private ressourceLost: Ressource, private ressourceWin: Ressource) { }

  public get $ressourceLost(): Ressource {
    return this.ressourceLost;
  }

  public set $ressourceLost(value: Ressource) {
    this.ressourceLost = value;
  }

  public get $ressourceWin(): Ressource {
    return this.ressourceWin;
  }

  public set $ressourceWin(value: Ressource) {
    this.ressourceWin = value;
  }

}
