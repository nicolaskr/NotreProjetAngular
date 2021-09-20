import { SessionRessource } from './session-ressource';
import { SessionBatiment } from './session-batiment';
import { Compte } from './compte';
export class Session {


  constructor( private _compte: Compte,
    private _def : number,
    private _att : number,
    private _listBatiments : SessionBatiment[],
    private _listRessources : SessionRessource [],
    private _tourEnCours : boolean) {
	}

    /**
     * Getter compte
     * @return {Compte}
     */
	public get compte(): Compte {
		return this._compte;
	}
  public get tourEnCours(): boolean {
		return this._tourEnCours;
	}

    /**
     * Getter def
     * @return {number}
     */
	public get def(): number {
		return this._def;
	}

    /**
     * Getter att
     * @return {number}
     */
	public get att(): number {
		return this._att;
	}

    /**
     * Getter listBatiments
     * @return {SessionBatiment[]}
     */
	public get listBatiments(): SessionBatiment[] {
		return this._listBatiments;
	}

    /**
     * Getter listRessources
     * @return {SessionRessource []}
     */
	public get listRessources(): SessionRessource [] {
		return this._listRessources;
	}

    /**
     * Setter compte
     * @param {Compte} value
     */
	public set compte(value: Compte) {
		this._compte = value;
	}

  public set tourEnCours(value: boolean) {
		this._tourEnCours = value;
	}

    /**
     * Setter def
     * @param {number} value
     */
	public set def(value: number) {
		this._def = value;
	}

    /**
     * Setter att
     * @param {number} value
     */
	public set att(value: number) {
		this._att = value;
	}

    /**
     * Setter listBatiments
     * @param {SessionBatiment[]} value
     */
	public set listBatiments(value: SessionBatiment[]) {
		this._listBatiments = value;
	}

    /**
     * Setter listRessources
     * @param {SessionRessource []} value
     */
	public set listRessources(value: SessionRessource []) {
		this._listRessources = value;
	}



}
