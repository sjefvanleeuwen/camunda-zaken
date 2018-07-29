import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Zaak
 * Zaak
 */
@model({name: 'Zaak'})
export class Zaak {
  constructor(data?: Partial<Zaak>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * URL naar het zaaktype in de CATALOGUS waar deze voorkomt
   */
  @property({name: 'zaaktype'})
  zaaktype: string;

  /**
   * De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd
   */
  @property({name: 'registratiedatum'})
  registratiedatum: Date;

  /**
   * 
   */
  @property({name: 'url'})
  url?: string;

  /**
   * De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
   */
  @property({name: 'zaakidentificatie'})
  zaakidentificatie?: string;

  /**
   * Een toelichting op de zaak.
   */
  @property({name: 'toelichting'})
  toelichting?: string;

  /**
   * Punt, lijn of (multi-)vlak geometrie-informatie, in GeoJSON.
   */
  @property({name: 'zaakgeometrie'})
  zaakgeometrie?: {
  
};

  /**
   * Indien geen status bekend is, dan is de waarde 'null'
   */
  @property({name: 'status'})
  status?: string;

}

