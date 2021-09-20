import { CoutBatiment } from './cout-batiment';
export class Batiment {



	constructor(private _nom : string,
    private _def : number,
    private _ameliorable : boolean,
    private _coutBatiment : CoutBatiment[],
    private _id:number) {
	}
  public get id(): number {
		return this._id;
	}
  public set id(value: number) {
		this._id = value;
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
	public get def(): number {
		return this._def;
	}

    /**
     * Getter ameliorable
     * @return {boolean}
     */
	public get ameliorable(): boolean {
		return this._ameliorable;
	}

    /**
     * Getter coutBatiment
     * @return {CoutBatiment[]}
     */
	public get coutBatiment(): CoutBatiment[] {
		return this._coutBatiment;
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
	public set def(value: number) {
		this._def = value;
	}

    /**
     * Setter ameliorable
     * @param {boolean} value
     */
	public set ameliorable(value: boolean) {
		this._ameliorable = value;
	}

    /**
     * Setter coutBatiment
     * @param {CoutBatiment[]} value
     */
	public set coutBatiment(value: CoutBatiment[]) {
		this._coutBatiment = value;
	}

}
