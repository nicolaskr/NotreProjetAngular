import { IdBatiment } from './id-batiment';

export class CoutBatiment {
  constructor(private id:IdBatiment,
    private cout?:Number){}


    /**
     * Getter $ressource
     * @return {Ressource}
     */
	public get $id(): IdBatiment {
		return this.id;
	}

    /**
     * Setter $ressource
     * @param {Ressource} value
     */
	public set $id(value: IdBatiment) {
		this.id = value;
	}

    /**
     * Getter $quantite
     * @return {Number}
     */
	public get $quantite(): Number|undefined {
		return this.cout;
	}

    /**
     * Setter $quantite
     * @param {Number} value
     */
	public set $quantite(value: Number|undefined) {
		this.cout = value;
	}

}
