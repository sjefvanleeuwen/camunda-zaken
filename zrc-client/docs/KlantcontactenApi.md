# ZaakregistratiecomponentZrcApi.KlantcontactenApi

All URIs are relative to *http://example.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**klantcontactenByIdGet**](KlantcontactenApi.md#klantcontactenByIdGet) | **GET** /klantcontacten/{id} | klantcontact_read
[**klantcontactenPost**](KlantcontactenApi.md#klantcontactenPost) | **POST** /klantcontacten | klantcontact_create


<a name="klantcontactenByIdGet"></a>
# **klantcontactenByIdGet**
> KlantContact klantcontactenByIdGet(id)

klantcontact_read

Geef de details van een klantcontact voor een ZAAK.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.KlantcontactenApi();

var id = 56; // Number | A unique integer value identifying this klantcontact.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.klantcontactenByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this klantcontact. | 

### Return type

[**KlantContact**](KlantContact.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="klantcontactenPost"></a>
# **klantcontactenPost**
> KlantContact klantcontactenPost(body)

klantcontact_create

Registreer een klantcontact bij een ZAAK.  Indien geen identificatie gegeven is, dan wordt deze automatisch gegenereerd.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.KlantcontactenApi();

var body = new ZaakregistratiecomponentZrcApi.KlantContact(); // KlantContact | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.klantcontactenPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KlantContact**](KlantContact.md)|  | 

### Return type

[**KlantContact**](KlantContact.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

