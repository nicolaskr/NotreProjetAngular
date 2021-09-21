import { Role } from './role';

export class Compte {
  constructor(
    private _id: number,
    private _username: string,
    private _role: Role,
    private _prenom: string,
    private _nom: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public get username(): string {
    return this._username;
  }

  public get role(): Role {
    return this._role;
  }

  public get prenom(): string {
    return this._prenom;
  }

  public get nom(): string {
    return this._nom;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set username(value: string) {
    this._username = value;
  }

  public set role(value: Role) {
    this._role = value;
  }

  public set prenom(value: string) {
    this._prenom = value;
  }

  public set nom(value: string) {
    this._nom = value;
  }
}
