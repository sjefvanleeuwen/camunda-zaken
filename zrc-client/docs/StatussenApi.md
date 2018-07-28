# ZaakregistratiecomponentZrcApi.StatussenApi

All URIs are relative to *http://example.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statussenByIdGet**](StatussenApi.md#statussenByIdGet) | **GET** /statussen/{id} | status_read
[**statussenPost**](StatussenApi.md#statussenPost) | **POST** /statussen | status_create


<a name="statussenByIdGet"></a>
# **statussenByIdGet**
> Status statussenByIdGet(id)

status_read



### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.StatussenApi();

var id = 56; // Number | A unique integer value identifying this status.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statussenByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this status. | 

### Return type

[**Status**](Status.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="statussenPost"></a>
# **statussenPost**
> Status statussenPost(body)

status_create



### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.StatussenApi();

var body = new ZaakregistratiecomponentZrcApi.Status(); // Status | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statussenPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Status**](Status.md)|  | 

### Return type

[**Status**](Status.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

