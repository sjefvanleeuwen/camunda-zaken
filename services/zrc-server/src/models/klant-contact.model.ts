import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - KlantContact
 * KlantContact
 */
@model({name: 'KlantContact'})
export class KlantContact {
  constructor(data?: Partial<KlantContact>) {
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
   * De datum en het tijdstip waarop het KLANTCONTACT begint
   */
  @property({name: 'datumtijd'})
  datumtijd: Date;

  /**
   * 
   */
  @property({name: 'url'})
  url?: string;

  /**
   * De unieke aanduiding van een KLANTCONTACT
   */
  @property({name: 'identificatie'})
  identificatie?: string;

  /**
   * Het communicatiekanaal waarlangs het KLANTCONTACT gevoerd wordt
   */
  @property({name: 'kanaal'})
  kanaal?: string;

}

