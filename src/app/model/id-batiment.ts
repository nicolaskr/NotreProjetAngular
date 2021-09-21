import { Ressource } from 'src/app/model/ressource';
export class IdBatiment {
  constructor(private ressource:Ressource){}


    /**
     * Getter $ressource
     * @return {Ressource}
     */
	public get $ressource(): Ressource {
		return this.ressource;
	}

    /**
     * Setter $ressource
     * @param {Ressource} value
     */
	public set $ressource(value: Ressource) {
		this.ressource = value;
	}

}
