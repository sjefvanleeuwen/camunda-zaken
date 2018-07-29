import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - OrganisatorischeEenheid
 * OrganisatorischeEenheid
 */
@model({name: 'OrganisatorischeEenheid'})
export class OrganisatorischeEenheid {
  constructor(data?: Partial<OrganisatorischeEenheid>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * Een korte identificatie van de organisatorische eenheid.
   */
  @property({name: 'organisatieEenheidIdentificatie'})
  organisatieEenheidIdentificatie: string;

  /**
   * Het RSIN van de organisatie zijnde een Niet-natuurlijk persoon waarvan de ORGANISATORISCHE EENHEID deel uit maakt.
   */
  @property({name: 'organisatieIdentificatie'})
  organisatieIdentificatie: number;

  /**
   * De datum wrop de organisatorische eenheid is ontstaan.
   */
  @property({name: 'datumOntstaan'})
  datumOntstaan: Date;

  /**
   * De feitelijke naam van de organisatorische eenheid.
   */
  @property({name: 'naam'})
  naam: string;

  /**
   * 
   */
  @property({name: 'url'})
  url?: string;

}

