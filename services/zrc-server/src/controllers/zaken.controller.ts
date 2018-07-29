/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Zaak} from '../models/zaak.model';
import {ZaakEigenschap} from '../models/zaak-eigenschap.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by zaken
 * 
 */
export class ZakenController {
  constructor() {}

  /**
   * Maak een ZAAK aan.

Indien geen zaakidentificatie gegeven is, dan wordt deze automatisch gegenereerd.
   * 

   * @param body 
   * @returns Created
   */
  @operation('post', '/zaken')
  async zakenPost(@requestBody() body: Zaak): Promise<Zaak> {
    throw new Error('Not implemented');
  }

  /**
   * Opvragen en bewerken van ZAAKen.
   * 

   * @param id A unique integer value identifying this zaak.
   * @returns OK
   */
  @operation('get', '/zaken/{id}')
  async zakenByIdGet(@param({name: 'id', in: 'path'}) id: number): Promise<Zaak> {
    throw new Error('Not implemented');
  }

  /**
   * Geef een collectie van eigenschappen behorend bij een ZAAK.
   * 

   * @param zaak_pk 
   * @returns OK
   */
  @operation('get', '/zaken/{zaak_pk}/zaakeigenschappen')
  async zakenZaakeigenschappenByZaakPkGet(@param({name: 'zaak_pk', in: 'path'}) zaak_pk: string): Promise<ZaakEigenschap[]> {
    throw new Error('Not implemented');
  }

  /**
   * Registreer een eigenschap van een ZAAK.
   * 

   * @param body 
   * @param zaak_pk 
   * @returns Created
   */
  @operation('post', '/zaken/{zaak_pk}/zaakeigenschappen')
  async zakenZaakeigenschappenByZaakPkPost(@requestBody() body: ZaakEigenschap, @param({name: 'zaak_pk', in: 'path'}) zaak_pk: string): Promise<ZaakEigenschap> {
    throw new Error('Not implemented');
  }

  /**
   * Geef de details van ZaakEigenschap voor een ZAAK.
   * 

   * @param id A unique integer value identifying this zaakeigenschap.
   * @param zaak_pk 
   * @returns OK
   */
  @operation('get', '/zaken/{zaak_pk}/zaakeigenschappen/{id}')
  async zakenZaakeigenschappenByZaakPkAndIdGet(@param({name: 'id', in: 'path'}) id: number, @param({name: 'zaak_pk', in: 'path'}) zaak_pk: string): Promise<ZaakEigenschap> {
    throw new Error('Not implemented');
  }

}

