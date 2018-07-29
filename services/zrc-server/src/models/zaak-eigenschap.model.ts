import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ZaakEigenschap
 * ZaakEigenschap
 */
@model({name: 'ZaakEigenschap'})
export class ZaakEigenschap {
  constructor(data?: Partial<ZaakEigenschap>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'zaak'})
  zaak: string;

  /**
   * URL naar de eigenschap in het ZTC
   */
  @property({name: 'eigenschap'})
  eigenschap: string;

  /**
   * 
   */
  @property({name: 'waarde'})
  waarde: string;

  /**
   * 
   */
  @property({name: 'url'})
  url?: string;

}

