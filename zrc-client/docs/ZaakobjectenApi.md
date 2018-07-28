# ZaakregistratiecomponentZrcApi.ZaakobjectenApi

All URIs are relative to *http://example.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zaakobjectenByIdGet**](ZaakobjectenApi.md#zaakobjectenByIdGet) | **GET** /zaakobjecten/{id} | zaakobject_read
[**zaakobjectenPost**](ZaakobjectenApi.md#zaakobjectenPost) | **POST** /zaakobjecten | zaakobject_create


<a name="zaakobjectenByIdGet"></a>
# **zaakobjectenByIdGet**
> ZaakObject zaakobjectenByIdGet(id)

zaakobject_read

Geef de details van een ZAAKOBJECT relatie.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.ZaakobjectenApi();

var id = 56; // Number | A unique integer value identifying this zaakobject.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zaakobjectenByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this zaakobject. | 

### Return type

[**ZaakObject**](ZaakObject.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="zaakobjectenPost"></a>
# **zaakobjectenPost**
> ZaakObject zaakobjectenPost(body)

zaakobject_create

Registreer een ZAAKOBJECT relatie.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.ZaakobjectenApi();

var body = new ZaakregistratiecomponentZrcApi.ZaakObject(); // ZaakObject | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zaakobjectenPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ZaakObject**](ZaakObject.md)|  | 

### Return type

[**ZaakObject**](ZaakObject.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

