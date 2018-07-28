# ZaakregistratiecomponentZrcApi.BetrokkenenApi

All URIs are relative to *http://example.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betrokkenenByIdGet**](BetrokkenenApi.md#betrokkenenByIdGet) | **GET** /betrokkenen/{id} | organisatorischeeenheid_read


<a name="betrokkenenByIdGet"></a>
# **betrokkenenByIdGet**
> OrganisatorischeEenheid betrokkenenByIdGet(id)

organisatorischeeenheid_read



### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.BetrokkenenApi();

var id = 56; // Number | A unique integer value identifying this Organisatorische eenheid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.betrokkenenByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Organisatorische eenheid. | 

### Return type

[**OrganisatorischeEenheid**](OrganisatorischeEenheid.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

