/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {ZaakObject} from '../models/zaak-object.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by zaakobjecten
 * 
 */
export class ZaakobjectenController {
  constructor() {}

  /**
   * Registreer een ZAAKOBJECT relatie.
   * 

   * @param body 
   * @returns Created
   */
  @operation('post', '/zaakobjecten')
  async zaakobjectenPost(@requestBody() body: ZaakObject): Promise<ZaakObject> {
    throw new Error('Not implemented');
  }

  /**
   * Geef de details van een ZAAKOBJECT relatie.
   * 

   * @param id A unique integer value identifying this zaakobject.
   * @returns OK
   */
  @operation('get', '/zaakobjecten/{id}')
  async zaakobjectenByIdGet(@param({name: 'id', in: 'path'}) id: number): Promise<ZaakObject> {
    throw new Error('Not implemented');
  }

}

