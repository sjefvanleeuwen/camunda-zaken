# ZaakregistratiecomponentZrcApi.RollenApi

All URIs are relative to *http://example.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rollenByIdGet**](RollenApi.md#rollenByIdGet) | **GET** /rollen/{id} | rol_read
[**rollenPost**](RollenApi.md#rollenPost) | **POST** /rollen | rol_create


<a name="rollenByIdGet"></a>
# **rollenByIdGet**
> Rol rollenByIdGet(id)

rol_read



### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.RollenApi();

var id = 56; // Number | A unique integer value identifying this Rol.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rollenByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Rol. | 

### Return type

[**Rol**](Rol.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rollenPost"></a>
# **rollenPost**
> Rol rollenPost(body)

rol_create

Koppel een BETROKKENE aan een ZAAK.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.RollenApi();

var body = new ZaakregistratiecomponentZrcApi.Rol(); // Rol | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rollenPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Rol**](Rol.md)|  | 

### Return type

[**Rol**](Rol.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

