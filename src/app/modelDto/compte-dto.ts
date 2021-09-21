import { Role } from '../model/role';

export class CompteDto {
  constructor(
    private username: string,
    private password: string,
    private role: Role,
    private prenom: string,
    private nom: string
  ) {}

  //   public get username(): string {
  //     return this._username;
  //   }

  //   public get role(): Role {
  //     return this._role;
  //   }

  //   public get prenom(): string {
  //     return this._prenom;
  //   }

  //   public get nom(): string {
  //     return this._nom;
  //   }

  //   public set username(value: string) {
  //     this._username = value;
  //   }

  //   public set role(value: Role) {
  //     this._role = value;
  //   }

  //   public set prenom(value: string) {
  //     this._prenom = value;
  //   }

  //   public set nom(value: string) {
  //     this._nom = value;
  //   }
}
