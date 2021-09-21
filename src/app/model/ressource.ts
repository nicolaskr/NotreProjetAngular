export class Ressource {

  constructor(private _nom: string,
    private _independant?: boolean,
    private _id?: number) {
  }
  /**
   * Getter id
   * @return {number}
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number | undefined) {
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
   * Setter nom
   * @param {string} value
   */
  public set nom(value: string) {
    this._nom = value;
  }

  /**
 * Getter independant
 * @return {boolean}
 */
  public get independant(): boolean | undefined {
    return this._independant;
  }

  /**
   * Setter independant
   * @param {boolean} value
   */
  public set independant(value: boolean | undefined) {
    this._independant = value;
  }

}
