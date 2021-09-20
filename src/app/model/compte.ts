export class Compte {



constructor(private _id : number, private _nom : string) {
}
    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}
  public get nom(): string {
		return this._nom;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}
  public set nom(value: string) {
		this._nom = value;
	}

}
