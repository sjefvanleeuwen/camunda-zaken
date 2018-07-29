<style>
.logo-loopback {background-color:#5555ff;padding:6px}
</style>
# Camunda Zaken

> This is a test project for using BPMN (Camunda) with GEMMA Zaakgericht werken processes.

![process](doc/zaakbehandelingsproces.png)
<center>

| <img src=doc/logo-camunda.svg width=80px />  | <img src=doc/logo-postman.svg width=64px />  | <img src=doc/logo-vscode.svg width=64px />  | <img src=doc/logo-nodejs.svg width=64px />  | <img src=doc/logo-npm.svg width=64px />  | <img src=doc/logo-openapi.png width=64px /> | <img src=doc/logo-loopback.svg width=48px class="logo-loopback" /> | <img src=doc/logo-docker.svg width=64px  /> | <img src=doc/logo-kubernetes.svg width=64px /> | 
|:--------:|:--------:|:--------:|:--------:|:--------:|--------:|:--------:|:--------:|:--------:|
| camunda  | postman  |  vscode  |  nodejs  |   npm    | openapi | loopback |  docker  |kubernetes| 

</center>

## Client-API's

* [Betrokkenen    ](zrc-client/docs/BetrokkenenApi.md    "Betrokkenen API documentation")
* [Klantcontacten ](/zrc-client/docs/KlantcontactenApi.md "Klantcontacten API documentation")
* [Rollen         ](/zrc-client/docs/RollenApi.md         "Rollen API documentation")
* [Statussen      ](/zrc-client/docs/StatussenApi.md      "Statussen API documentation")
* [Zaakobjecten   ](/zrc-client/docs/ZaakobjectenApi.md   "Zaakobjecten API documentation")
* [Zaken          ](/zrc-client/docs/ZakenApi.md          "Zaken API documentation")

## Install

use: npm install<br/>
install default docker image from camunda<br/>
install postman for using the configuration files under integration-tests folder<br/>
install camunda modeler<br/>
deploy the zaakbehandelingsproces.bpmn using the modeler

## Usage

run node ./zaakbehandelingsproces.js
run the postman collection to triger a new process

## Screenshots of IDE's

![screencap1](doc/screencap1.png)<br/>
![screencap2](doc/screencap2.png)

## Contribute

PRs accepted.

## License

EUPL-1.2 © Sjef van Leeuwen