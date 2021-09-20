import { Ressource } from './ressource';
import { CoutBatiment } from './cout-batiment';
export class Batiment {

	constructor(private _nom : string,
    private _pointsDefense : number,
    private _ameliorable : boolean,
    private _coutBatiment : CoutBatiment[],
    private _pointsDAttaque: number,
    private _quantiteProduite : number,
    private _ressource : Ressource = new Ressource(),
    private _id?:number) {
	}

  public get id(): number |undefined{
		return this._id;
	}
  public set id(value: number|undefined) {
		this._id = value;
	}


  public get att(): number {
    return this._att;
  }
  public set att(value: number) {
    this._att = value;
  }


  /**
   * Getter nom
   * @return {string}
   */
  public get nom(): string {
    return this._nom;
  }


    /**
     * Getter def
     * @return {number}
     */
	public get pointsDefense(): number {
		return this._pointsDefense;
	}

  /**
     * Getter def
     * @return {number}
     */
	public get quantiteProduite(): number {
		return this._quantiteProduite;
	}

    /**
     * Getter ameliorable
     * @return {boolean}
     */
	public get ameliorable(): boolean {
		return this._ameliorable;
	}

  /**
   * Getter ameliorable
   * @return {boolean}
   */
  public get ameliorable(): boolean {
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
     * @return {number}
     */
	public get pointsDAttaque(): number {
		return this._pointsDAttaque;
	}

    /**
     * Setter nom
     * @param {string} value
     */
	public set nom(value: string) {
		this._nom = value;
	}

    /**
     * Setter def
     * @param {number} value
     */
	public set pointsDefense(value: number) {
		this._pointsDefense = value;
	}

      /**
     * Setter def
     * @param {number} value
     */
	public set pointsDAttaque(value: number) {
		this._pointsDAttaque = value;
	}

    /**
     * Setter ameliorable
     * @param {boolean} value
     */
	public set ameliorable(value: boolean) {
		this._ameliorable = value;
	}

  /**
   * Setter ameliorable
   * @param {boolean} value
   */
  public set ameliorable(value: boolean) {
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
	public set quantiteProduite(value: number) {
		this._quantiteProduite = value;
	}

}
