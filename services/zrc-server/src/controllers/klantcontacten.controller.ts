/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {KlantContact} from '../models/klant-contact.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by klantcontacten
 * 
 */
export class KlantcontactenController {
  constructor() {}

  /**
   * Registreer een klantcontact bij een ZAAK.

Indien geen identificatie gegeven is, dan wordt deze automatisch gegenereerd.
   * 

   * @param body 
   * @returns Created
   */
  @operation('post', '/klantcontacten')
  async klantcontactenPost(@requestBody() body: KlantContact): Promise<KlantContact> {
    throw new Error('Not implemented');
  }

  /**
   * Geef de details van een klantcontact voor een ZAAK.
   * 

   * @param id A unique integer value identifying this klantcontact.
   * @returns OK
   */
  @operation('get', '/klantcontacten/{id}')
  async klantcontactenByIdGet(@param({name: 'id', in: 'path'}) id: number): Promise<KlantContact> {
    throw new Error('Not implemented');
  }

}

