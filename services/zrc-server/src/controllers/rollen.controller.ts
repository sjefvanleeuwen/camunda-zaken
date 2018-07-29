/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Rol} from '../models/rol.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by rollen
 * 
 */
export class RollenController {
  constructor() {}

  /**
   * Koppel een BETROKKENE aan een ZAAK.
   * 

   * @param body 
   * @returns Created
   */
  @operation('post', '/rollen')
  async rollenPost(@requestBody() body: Rol): Promise<Rol> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id A unique integer value identifying this Rol.
   * @returns OK
   */
  @operation('get', '/rollen/{id}')
  async rollenByIdGet(@param({name: 'id', in: 'path'}) id: number): Promise<Rol> {
    throw new Error('Not implemented');
  }

}

