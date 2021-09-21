import { Partie } from './partie';
import { SessionRessource } from './session-ressource';
import { SessionBatiment } from './session-batiment';
import { Compte } from './compte';
export class Session {


  constructor( private _compte?: Compte,
    private _def ?: number,
    private _att? : number,
    private _sessionBatiments ?: SessionBatiment[],
    private _sessionRessources ?: SessionRessource [],
    private _partie ? : Partie,
    private _tourEnCours ?: boolean) {
	}

  public get partie(): Partie{
    return this._partie;
  }
  /**
   * Getter compte
   * @return {Compte}
   */
  public get compte(): Compte{
    return this._compte;
  }

  public get tourEnCours(): boolean {
    return this._tourEnCours;
  }

  /**
   * Getter def
   * @return {number}
   */
  public get def(): number{
    return this._def;
  }

    /**
     * Getter listBatiments
     * @return {SessionBatiment[]}
     */
	public get sessionBatiment(): SessionBatiment[] |undefined{
		return this._sessionBatiments;
	}
  /**
   * Getter att
   * @return {number}
   */
  public get att(): number {
    return this._att;
  }

    /**
     * Getter listRessources
     * @return {SessionRessource []}
     */
	public get sessionRessource(): SessionRessource []|undefined {
		return this._sessionRessources;
	}

  /**
   * Getter listRessources
   * @return {SessionRessource []}
   */
  public get listRessources(): SessionRessource[] {
    return this._listRessources;
  }

  /**
   * Setter compte
   * @param {Compte} value
   */
  public set compte(value: Compte ) {
    this._compte = value;
  }

  public set tourEnCours(value: boolean ) {
    this._tourEnCours = value;
  }

  /**
   * Setter def
   * @param {number} value
   */
  public set def(value: number ) {
    this._def = value;
  }
  public set partie(value: Partie) {
    this._partie = value;
  }

    /**
     * Setter listBatiments
     * @param {SessionBatiment[]} value
     */
	public set sessionBatiment(value: SessionBatiment[]|undefined) {
		this._sessionBatiments = value;
	}
  /**
   * Setter att
   * @param {number} value
   */
  public set att(value: number ) {
    this._att = value;
  }

    /**
     * Setter listRessources
     * @param {SessionRessource []} value
     */
	public set sessionRessource(value: SessionRessource []|undefined) {
		this._sessionRessources = value;
	}

  /**
   * Setter listRessources
   * @param {SessionRessource []} value
   */
  public set listRessources(value: SessionRessource[]) {
    this._listRessources = value;
  }



}
