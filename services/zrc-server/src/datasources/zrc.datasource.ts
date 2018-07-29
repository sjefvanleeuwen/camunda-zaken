import {inject} from '@loopback/core';
import {juggler, DataSource, AnyObject} from '@loopback/repository';
const config = require('./zrc.datasource.json');

export class ZrcDataSource extends juggler.DataSource {
  static dataSourceName = 'zrc';

  constructor(
    @inject('datasources.config.zrc', {optional: true})
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
