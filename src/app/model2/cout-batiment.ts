import { IdBatiment } from 'src/app/model2/id-batiment';
export class CoutBatiment {

  constructor(private _id:IdBatiment,
    private _cout?:Number){}


      /**
       * Getter id
       * @return {Ressource}
       */
    public get id(): IdBatiment {
      return this._id;
    }

      /**
       * Setter id
       * @param {Ressource} value
       */
    public set id(value: IdBatiment) {
      this._id = value;
    }

      /**
       * Getter cout
       * @return {Number}
       */
    public get cout(): Number|undefined {
      return this._cout;
    }

      /**
       * Setter cout
       * @param {Number} value
       */
    public set cout(value: Number|undefined) {
      this._cout = value;
    }

}
