/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Status} from '../models/status.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by statussen
 * 
 */
export class StatussenController {
  constructor() {}

  /**
   * 
   * 

   * @param body 
   * @returns Created
   */
  @operation('post', '/statussen')
  async statussenPost(@requestBody() body: Status): Promise<Status> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id A unique integer value identifying this status.
   * @returns OK
   */
  @operation('get', '/statussen/{id}')
  async statussenByIdGet(@param({name: 'id', in: 'path'}) id: number): Promise<Status> {
    throw new Error('Not implemented');
  }

}

