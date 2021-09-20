import { Ressource } from "./ressource";
import { Session } from "./session";

export class SessionRessource {


	constructor( private _quantite :number,
    private _ressource : Ressource,
    private _session : Session) {
	}



    /**
     * Getter quantite
     * @return {number}
     */
	public get quantite(): number {
		return this._quantite;
	}

    /**
     * Getter ressource
     * @return {Ressource}
     */
	public get ressource(): Ressource {
		return this._ressource;
	}

    /**
     * Setter quantite
     * @param {number} value
     */
	public set quantite(value: number) {
		this._quantite = value;
	}

    /**
     * Setter ressource
     * @param {Ressource} value
     */
	public set ressource(value: Ressource) {
		this._ressource = value;
	}


}
