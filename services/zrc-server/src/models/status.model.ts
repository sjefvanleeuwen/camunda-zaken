import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Status
 * Status
 */
@model({name: 'Status'})
export class Status {
  constructor(data?: Partial<Status>) {
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
   * 
   */
  @property({name: 'statusType'})
  statusType: string;

  /**
   * De datum waarop de ZAAK de status heeft verkregen.
   */
  @property({name: 'datumStatusGezet'})
  datumStatusGezet: Date;

  /**
   * 
   */
  @property({name: 'url'})
  url?: string;

  /**
   * Een, voor de initiator van de zaak relevante, toelichting op de status van een zaak.
   */
  @property({name: 'statustoelichting'})
  statustoelichting?: string;

}

