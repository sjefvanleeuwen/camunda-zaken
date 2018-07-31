# Camunda Zaken

> !NOTE, this is a test project for using BPMN (Camunda) with GEMMA Zaakgericht werken processes. The project is under heavy development and is currently unstable.

![process](doc/zaakbehandelingsproces.png)
<center>

| <img src=doc/logo-camunda.svg width=80px />  | <img src=doc/logo-postman.svg width=64px />  | <img src=doc/logo-vscode.svg width=64px />  | <img src=doc/logo-nodejs.svg width=64px />  | <img src=doc/logo-npm.svg width=64px />  | <img src=doc/logo-openapi.png width=64px /> | <img src=doc/logo-loopback.svg width=64px /> | <img src=doc/logo-docker.svg width=64px  /> | <img src=doc/logo-kubernetes.svg width=64px /> | 
|:--------:|:--------:|:--------:|:--------:|:--------:|--------:|:--------:|:--------:|:--------:|
| [camunda](https://camunda.com)  | [postman](https://www.getpostman.com)  |  [vscode](https://code.visualstudio.com)  |  [nodejs](https://nodejs.org)  |   ([npm](https://www.npmjs.com)    | [openapi](https://www.openapis.org) | [loopback](https://loopback.io) |  [docker](https://www.docker.com) |[kubernetes](https://kubernetes.io)| 

</center>

## GEMMA Client-API's

Gemma client api interface are generated from Common Ground openapi.yaml openAPI3.0 definitions for nodejs applications. The yaml definitions have been downgraded to openAPI 2.0 (a.k.a. swagger 2.0) because more code generation tools are supported for this version.

* [Betrokkenen    ](zrc-client/docs/BetrokkenenApi.md     "Betrokkenen API documentation")
* [Klantcontacten ](/zrc-client/docs/KlantcontactenApi.md "Klantcontacten API documentation")
* [Rollen         ](/zrc-client/docs/RollenApi.md         "Rollen API documentation")
* [Statussen      ](/zrc-client/docs/StatussenApi.md      "Statussen API documentation")
* [Zaakobjecten   ](/zrc-client/docs/ZaakobjectenApi.md   "Zaakobjecten API documentation")
* [Zaken          ](/zrc-client/docs/ZakenApi.md          "Zaken API documentation")

## GEMMA Server API's

Gemma server api's are generated from Common Ground openapi.yaml openAPI3.0 definitions for nodejs applications. The yaml definitions have been downgraded to openAPI 2.0 (a.k.a. swagger 2.0) because more code generation tools are supported for this version.

Loopback is used on these definitions to generate the API implementations to create the models for data storage.



## Install

use: npm install<br/>
install default docker image from camunda<br/>
install postman for using the configuration files under integration-tests folder<br/>
install camunda modeler<br/>
deploy the zaakbehandelingsproces.bpmn using the modeler

### loopback
If you want to roll your own API's based on the openAPI definitions in the project, you will need to install the loopback cli:

npm i -g @loopback/cli

### Database support (through Juggler)

By default the project currently comes with in Memory database datasource (IBM strongloop) but other datasources can be injected.

<table>
  <thead>
    <tr>
      <th>Database type</th>
      <th>Package name</th>
      <th>Maintainer</th>
      <th>Build status / coverage</th>
    </tr>
  </thead>
  <tbody>
    <!-- ArangoDB -->
    <tr>
      <td><a href="http://www.arangodb.org/"><img width="16" height="16" src="https://www.arangodb.com/wp-content/uploads/2016/03/small-1.png" style="vertical-align:middle" alt="ArangoDB" /></a> ArangoDB</td>
      <td><a href="https://github.com/m0ppers/jugglingdb-arango">jugglingdb-arango</a></td>
      <td><a href="https://github.com/m0ppers">Andreas Streichardt</a></td>
      <td><a href="https://travis-ci.org/m0ppers/jugglingdb-arango"><img src="https://travis-ci.org/m0ppers/jugglingdb-arango.svg?branch=master" alt="Build Status" /></a></td>
    </tr>
    <!-- Firebird -->
    <tr>
      <td><a href="http://firebirdsql.org"><img src="http://firebirdsql.org/favicon.ico" alt="Firebird"/></a> Firebird</td>
      <td><a href="http://github.com/hgourvest/jugglingdb-firebird">jugglingdb-firebird</a></td>
      <td><a href="http://github.com/hgourvest">Henri Gourvest</a></td>
    </tr>
    <!-- MongoDB -->
    <tr>
      <td><a href="http://www.mongodb.org"><img width="16" height="16" src="https://www.mongodb.com/assets/images/global/favicon.ico" alt="MongoDB" /></a> MongoDB</td>
      <td><a href="https://github.com/jugglingdb/mongodb-adapter">jugglingdb-mongodb</a></td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/mongodb-adapter"><img src="https://circleci.com/gh/jugglingdb/mongodb-adapter.svg?&style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/mongodb-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/mongodb-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <!-- MySQL -->
    <tr>
      <td><a href="http://www.mysql.com/"><img width="16" height="16" src="http://www.mysql.com/common/themes/sakila/favicon.ico" style="vertical-align:middle"" alt="MySQL" /></a> MySQL</td>
      <td><a href="https://github.com/jugglingdb/mysql-adapter">jugglingdb-mysql</a></td>
      <td><a href="https://github.com/dgsan">dgsan</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/mysql-adapter"><img src="https://circleci.com/gh/jugglingdb/mysql-adapter.svg?style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/mysql-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/mysql-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <!-- CouchDB / nano -->
    <tr>
      <td><a href="http://couchdb.apache.org/"><img width="16" src="http://couchdb.apache.org/favicon.ico" style="vertical-align:middle"" alt="CouchDB" /></a> CouchDB / nano</td>
      <td><a href="https://github.com/jugglingdb/nano-adapter">jugglingdb-nano</a></td>
      <td><a href="https://github.com/nrw">Nicholas Westlake</a></td>
      <td><a href="https://travis-ci.org/jugglingdb/nano-adapter"><img src="https://travis-ci.org/jugglingdb/nano-adapter.svg?branch=master" alt="Build Status" /></a></td>
    </tr>
    <!-- PostgreSQL -->
    <tr>
      <td><a href="http://www.postgresql.org/"><img src="http://www.postgresql.org/favicon.ico" style="vertical-align:middle"" alt="PostgreSQL" /></a> PostgreSQL</td>
      <td><a href="https://github.com/jugglingdb/postgres-adapter">jugglingdb-postgres</a></td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/postgres-adapter"><img src="https://circleci.com/gh/jugglingdb/postgres-adapter.svg?style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/postgres-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/postgres-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <!-- Redis -->
    <tr>
      <td><a href="http://redis.io/"><img src="http://redis.io/images/favicon.png" alt="Redis" /></a> Redis</td>
      <td><a href="https://github.com/jugglingdb/redis-hq-adapter">jugglingdb-redis-hq</a></td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/redis-hq-adapter"><img src="https://circleci.com/gh/jugglingdb/redis-hq-adapter.svg?style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/redis-hq-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/redis-hq-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <!-- RethinkDB -->
    <tr>
      <td><a href="http://www.rethinkdb.com/"><img src="http://www.rethinkdb.com/favicon.ico" alt="RethinkDB" width="16" height="16" /></a> RethinkDB</td>
      <td><a href="https://github.com/fuwaneko/jugglingdb-rethink">jugglingdb-rethink</a></td>
      <td><a href="https://github.com/fuwaneko">Tewi Inaba</a></td>
      <td><a href="https://travis-ci.org/fuwaneko/jugglingdb-rethink"><img src="https://travis-ci.org/fuwaneko/jugglingdb-rethink.svg?branch=master" alt="Build Status" /></a></td>
    </tr>
    <!-- SQLite 3 -->
    <tr>
      <td><a href="http://www.sqlite.org/"><img width="16" src="https://www.sqlmaestro.com/data/181/1249905374-32x32.gif" style="vertical-align:middle" alt="SQLite" /></a> SQLite</td>
      <td><a href="https://github.com/jugglingdb/sqlite3-adapter">jugglingdb-sqlite3</a></td>
      <td><a href="https://github.com/anatoliychakkaev">Anatoliy Chakkaev</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/sqlite3-adapter"><img src="https://circleci.com/gh/jugglingdb/sqlite3-adapter.svg?style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/sqlite3-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/sqlite3-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <tr>
      <td>WebService</td>
      <td>built-in</td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>Memory (bogus)</td>
      <td>built-in</td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td>n/a</td>
    </tr>
    <!-- DynamoDB -->
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Amazon_DynamoDB"> DynamoDB </a></td>
      <td><a href="https://github.com/tmpaul/jugglingdb-dynamodb">jugglingdb-dynamodb</a></td>
      <td><a href="https://github.com/tmpaul">tmpaul</a></td>
      <td><a href="https://travis-ci.org/tmpaul/jugglingdb-dynamodb"><img src="https://travis-ci.org/tmpaul/jugglingdb-dynamodb.svg?branch=master" alt="Build Status" /></a></td>
    </tr>
    <tr>
      <td><a href="http://www.microsoft.com/en-ca/server-cloud/products/sql-server/">SQL Server<a></td>
      <td><a href="https://github.com/Quadrus/jugglingdb-mssql">jugglingdb-mssql</a></td>
      <td><a href="https://github.com/Quadrus">Quadrus</a></td>
      <td>n/a</td>
    </tr>
    <tr>
      <td><a href="https://msdn.microsoft.com/en-us/library/azure/jj553018.aspx">Azure Table Storage<a></td>
      <td><a href="https://github.com/yads/jugglingdb-azure-tablestorage">jugglingdb-azure-tablestorage</a></td>
      <td><a href="https://github.com/yads">Vadim Kazakov</a></td>
      <td>n/a</td>
    </tr>

  </tbody>
</table>

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
