import { TransformationRessource } from './transformation-ressource';
import { Ressource } from './ressource';
import { CoutBatiment } from './cout-batiment';
export class Batiment {
  constructor(
    private _nom: string,
    private _ressource: Ressource,
    private _pointsDefense?: number | undefined,
    private _ameliorable?: boolean | undefined,
    private _att?: number | undefined,
    private _coutBatiment?: CoutBatiment[] | undefined,
    private _pointsDAttaque?: number | undefined,
    private _quantiteProduite?: number | undefined,
    private _transformationRessouce?: TransformationRessource[] | undefined ,
    private _id?: number | undefined
  ) {}

  public get coutBatiment(): CoutBatiment[] | undefined {
    return this._coutBatiment;
  }

  public set coutBatiment(value : CoutBatiment[] | undefined) {
    this._coutBatiment=value;
  }

  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }

  public get att(): number | undefined {
    return this._att;
  }
  public set att(value: number | undefined) {
    this._att = value;
  }

  /**
   * Getter nom
   * @return {string}
   */
  public get nom(): string{
    return this._nom;
  }

  /**
   * Getter def
   * @return {number}
   */
  public get pointsDefense(): number | undefined{
    return this._pointsDefense;
  }

  /**
   * Getter def
   * @return {number}
   */
  public get quantiteProduite(): number | undefined {
    return this._quantiteProduite;
  }

  /**
   * Getter ameliorable
   * @return {boolean}
   */
  public get ameliorable(): boolean | undefined {
    return this._ameliorable;
  }

  /**
   * Getter ressource
   * @return {Ressource}
   */
  public get ressource(): Ressource {
    return this._ressource;
  }

  /**
   * Getter def
   * @return {TransformationRessource[]}
   */
  public get transformationRessource(): TransformationRessource[] | undefined {
    return this._transformationRessouce;
  }

   /**
   * Getter def
   * @return {TransformationRessource[]}
   */
    public get coutBatiment(): CoutBatiment[] | undefined {
      return this._coutBatiment;
    }

    /**
   * Getter def
   * @return {number}
   */
     public get pointsDAttaque(): number | undefined {
      return this._pointsDAttaque;
    }

  /**
   * Setter nom
   * @param {string} value
   */
  public set nom(value: string | undefined) {
    this._nom = value;
  }

  /**
   * Setter def
   * @param {number} value
   */
  public set pointsDefense(value: number | undefined) {
    this._pointsDefense = value;
  }

  /**
   * Setter def
   * @param {number} value
   */
  public set pointsDAttaque(value: number | undefined) {
    this._pointsDAttaque = value;
  }

  /**
   * Setter ameliorable
   * @param {boolean} value
   */
  public set ameliorable(value: boolean | undefined) {
    this._ameliorable = value;
  }

  /**
   * Setter ressource
   * @param {Ressource} value
   */
  public set ressource(value: Ressource) {
    this._ressource = value;
  }

  /**
   * Setter def
   * @param {number} value
   */
  public set quantiteProduite(value: number | undefined) {
    this._quantiteProduite = value;
  }

    /**
   * Setter def
   * @param {TransformationRessource[]} value
   */
     public set transformationRessouce(value: TransformationRessource[] | undefined) {
      this._transformationRessouce = value;
    }

     /**
   * Setter def
   * @param {TransformationRessource[]} value
   */
      public set coutBatiment(value: CoutBatiment[] | undefined) {
        this._coutBatiment = value;
      }
}
