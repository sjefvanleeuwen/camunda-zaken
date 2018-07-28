# ZaakregistratiecomponentZrcApi.ZakenApi

All URIs are relative to *http://example.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zakenByIdGet**](ZakenApi.md#zakenByIdGet) | **GET** /zaken/{id} | zaak_read
[**zakenPost**](ZakenApi.md#zakenPost) | **POST** /zaken | zaak_create
[**zakenZaakeigenschappenByZaakPkAndIdGet**](ZakenApi.md#zakenZaakeigenschappenByZaakPkAndIdGet) | **GET** /zaken/{zaak_pk}/zaakeigenschappen/{id} | zaakeigenschap_read
[**zakenZaakeigenschappenByZaakPkGet**](ZakenApi.md#zakenZaakeigenschappenByZaakPkGet) | **GET** /zaken/{zaak_pk}/zaakeigenschappen | zaakeigenschap_list
[**zakenZaakeigenschappenByZaakPkPost**](ZakenApi.md#zakenZaakeigenschappenByZaakPkPost) | **POST** /zaken/{zaak_pk}/zaakeigenschappen | zaakeigenschap_create


<a name="zakenByIdGet"></a>
# **zakenByIdGet**
> Zaak zakenByIdGet(id)

zaak_read

Opvragen en bewerken van ZAAKen.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.ZakenApi();

var id = 56; // Number | A unique integer value identifying this zaak.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zakenByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this zaak. | 

### Return type

[**Zaak**](Zaak.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="zakenPost"></a>
# **zakenPost**
> Zaak zakenPost(body)

zaak_create

Maak een ZAAK aan.  Indien geen zaakidentificatie gegeven is, dan wordt deze automatisch gegenereerd.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.ZakenApi();

var body = new ZaakregistratiecomponentZrcApi.Zaak(); // Zaak | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zakenPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Zaak**](Zaak.md)|  | 

### Return type

[**Zaak**](Zaak.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="zakenZaakeigenschappenByZaakPkAndIdGet"></a>
# **zakenZaakeigenschappenByZaakPkAndIdGet**
> ZaakEigenschap zakenZaakeigenschappenByZaakPkAndIdGet(id, zaakPk)

zaakeigenschap_read

Geef de details van ZaakEigenschap voor een ZAAK.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.ZakenApi();

var id = 56; // Number | A unique integer value identifying this zaakeigenschap.

var zaakPk = "zaakPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zakenZaakeigenschappenByZaakPkAndIdGet(id, zaakPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this zaakeigenschap. | 
 **zaakPk** | **String**|  | 

### Return type

[**ZaakEigenschap**](ZaakEigenschap.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="zakenZaakeigenschappenByZaakPkGet"></a>
# **zakenZaakeigenschappenByZaakPkGet**
> [ZaakEigenschap] zakenZaakeigenschappenByZaakPkGet(zaakPk)

zaakeigenschap_list

Geef een collectie van eigenschappen behorend bij een ZAAK.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.ZakenApi();

var zaakPk = "zaakPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zakenZaakeigenschappenByZaakPkGet(zaakPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zaakPk** | **String**|  | 

### Return type

[**[ZaakEigenschap]**](ZaakEigenschap.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="zakenZaakeigenschappenByZaakPkPost"></a>
# **zakenZaakeigenschappenByZaakPkPost**
> ZaakEigenschap zakenZaakeigenschappenByZaakPkPost(zaakPk, body)

zaakeigenschap_create

Registreer een eigenschap van een ZAAK.

### Example
```javascript
var ZaakregistratiecomponentZrcApi = require('zaakregistratiecomponent__zrc_api');
var defaultClient = ZaakregistratiecomponentZrcApi.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new ZaakregistratiecomponentZrcApi.ZakenApi();

var zaakPk = "zaakPk_example"; // String | 

var body = new ZaakregistratiecomponentZrcApi.ZaakEigenschap(); // ZaakEigenschap | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zakenZaakeigenschappenByZaakPkPost(zaakPk, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zaakPk** | **String**|  | 
 **body** | [**ZaakEigenschap**](ZaakEigenschap.md)|  | 

### Return type

[**ZaakEigenschap**](ZaakEigenschap.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

