import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ZaakObject
 * ZaakObject
 */
@model({name: 'ZaakObject'})
export class ZaakObject {
  constructor(data?: Partial<ZaakObject>) {
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
   * URL naar de resource die het OBJECT beschrijft.
   */
  @property({name: 'object'})
  object: string;

  /**
   * 
   */
  @property({name: 'url'})
  url?: string;

  /**
   * Omschrijving van de betrekking tussen de ZAAK en het OBJECT.
   */
  @property({name: 'relatieomschrijving'})
  relatieomschrijving?: string;

}

