/**
 * Zaakregistratiecomponent (ZRC) API
 * Een API om een zaakregistratiecomponent te benaderen
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ZaakregistratiecomponentZrcApi) {
      root.ZaakregistratiecomponentZrcApi = {};
    }
    root.ZaakregistratiecomponentZrcApi.KlantContact = factory(root.ZaakregistratiecomponentZrcApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The KlantContact model module.
   * @module model/KlantContact
   * @version 1
   */

  /**
   * Constructs a new <code>KlantContact</code>.
   * @alias module:model/KlantContact
   * @class
   * @param zaak {String} 
   * @param datumtijd {Date} De datum en het tijdstip waarop het KLANTCONTACT begint
   */
  var exports = function(zaak, datumtijd) {
    var _this = this;

    _this['zaak'] = zaak;
    _this['datumtijd'] = datumtijd;



  };

  /**
   * Constructs a <code>KlantContact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KlantContact} obj Optional instance to populate.
   * @return {module:model/KlantContact} The populated <code>KlantContact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('zaak')) {
        obj['zaak'] = ApiClient.convertToType(data['zaak'], 'String');
      }
      if (data.hasOwnProperty('datumtijd')) {
        obj['datumtijd'] = ApiClient.convertToType(data['datumtijd'], 'Date');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('identificatie')) {
        obj['identificatie'] = ApiClient.convertToType(data['identificatie'], 'String');
      }
      if (data.hasOwnProperty('kanaal')) {
        obj['kanaal'] = ApiClient.convertToType(data['kanaal'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} zaak
   */
  exports.prototype['zaak'] = undefined;
  /**
   * De datum en het tijdstip waarop het KLANTCONTACT begint
   * @member {Date} datumtijd
   */
  exports.prototype['datumtijd'] = undefined;
  /**
   * 
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * De unieke aanduiding van een KLANTCONTACT
   * @member {String} identificatie
   */
  exports.prototype['identificatie'] = undefined;
  /**
   * Het communicatiekanaal waarlangs het KLANTCONTACT gevoerd wordt
   * @member {String} kanaal
   */
  exports.prototype['kanaal'] = undefined;



  return exports;
}));


