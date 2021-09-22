import { Ressource } from 'src/app/model/ressource';
export class IdBatiment {

  constructor(private _ressource:Ressource){}


  /**
   * Getter $ressource
   * @return {Ressource}
   */
public get ressource(): Ressource {
  return this._ressource;
}

  /**
   * Setter $ressource
   * @param {Ressource} value
   */
public set ressource(value: Ressource) {
  this._ressource = value;
}
}
