import {model, property} from '@loopback/repository';
import {Rolomschrijving} from './rolomschrijving.model';
import {RolomschrijvingGeneriek} from './rolomschrijving-generiek.model';

/**
 * The model class is generated from OpenAPI schema - Rol
 * Rol
 */
@model({name: 'Rol'})
export class Rol {
  constructor(data?: Partial<Rol>) {
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
  @property({name: 'betrokkene'})
  betrokkene: string;

  /**
   * 
   */
  @property({name: 'rolomschrijving'})
  rolomschrijving: Rolomschrijving;

  /**
   * 
   */
  @property({name: 'rolomschrijvingGeneriek'})
  rolomschrijvingGeneriek: RolomschrijvingGeneriek;

  /**
   * 
   */
  @property({name: 'roltoelichting'})
  roltoelichting: string;

  /**
   * 
   */
  @property({name: 'url'})
  url?: string;

}

