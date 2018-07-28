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
    define(['ApiClient', 'model/Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Status'));
  } else {
    // Browser globals (root is window)
    if (!root.ZaakregistratiecomponentZrcApi) {
      root.ZaakregistratiecomponentZrcApi = {};
    }
    root.ZaakregistratiecomponentZrcApi.StatussenApi = factory(root.ZaakregistratiecomponentZrcApi.ApiClient, root.ZaakregistratiecomponentZrcApi.Status);
  }
}(this, function(ApiClient, Status) {
  'use strict';

  /**
   * Statussen service.
   * @module api/StatussenApi
   * @version 1
   */

  /**
   * Constructs a new StatussenApi. 
   * @alias module:api/StatussenApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the statussenByIdGet operation.
     * @callback module:api/StatussenApi~statussenByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * status_read
     * 
     * @param {Number} id A unique integer value identifying this status.
     * @param {module:api/StatussenApi~statussenByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    this.statussenByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling statussenByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Status;

      return this.apiClient.callApi(
        '/statussen/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the statussenPost operation.
     * @callback module:api/StatussenApi~statussenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * status_create
     * 
     * @param {module:model/Status} body 
     * @param {module:api/StatussenApi~statussenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    this.statussenPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling statussenPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Status;

      return this.apiClient.callApi(
        '/statussen', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));