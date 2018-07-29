/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {OrganisatorischeEenheid} from '../models/organisatorische-eenheid.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by betrokkenen
 * 
 */
export class BetrokkenenController {
  constructor() {}

  /**
   * 
   * 

   * @param id A unique integer value identifying this Organisatorische eenheid.
   * @returns OK
   */
  @operation('get', '/betrokkenen/{id}')
  async betrokkenenByIdGet(@param({name: 'id', in: 'path'}) id: number): Promise<OrganisatorischeEenheid> {
    throw new Error('Not implemented');
  }

}

