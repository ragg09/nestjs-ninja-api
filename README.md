<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Guides

### Modules

creating resources via nest-cli will enforce dependencies, proper folder strucutre, and naming conventions

- create a module using nest-clis `nest g module name-of-module`
- create a controller using nest-clis `nest g controller name-of-controller`
- create a service using nest-clis `nest g service name-of-service`
- create entire resource (entire CRUD) using nest-clis `nest g resource name-of-resource`

### Controllers

controllers can be simply created using the basic http request via decorators

- import { Body, Delete, Get, Param, Post, Put, Query, } from '@nestjs/common';
- decorators can accept additional parameters such as ID
- to acceess the parameters in the decorators, you have to declare another decorator inside the method, `@Param('param-name')`
- query on the other hand dont need to go through the decorator, it can declare inside of a method directly `@Query('query-name)`.
- dto folder and files are responsible for creating type for POST requests
- post/put requests also need additional decorator inside the method which is the `@Body() createDto: CreateDto` decorator

### Services and Providers

Services and Providers allow you to create a logic that can be used for controller, services typically manipulates a collection of data depends on what instruction you provided

- allows you to create multiple methods with different logics to manipulate data
- common methods that are included to services are the CRUD logic
- to use services, you have to instantiate it to your controller method
- but the most convenient way to instantiate it is to craete a constructor in the controller, this become possible due to the `@Injectable()` decorator declared for the services

### Excecption Handling

There are lots of error handling built in in NestJS

- common use is the try catch with the built in exception `NotFoundException();`
- the documentation provides all the HTTP exceptions
- you can also create a custom exception

### Pipes

This is a very simple function, usually used to transform input data to desired form, basically parsing.

- there are lots of built in pipes
- you can also create custom pipe
- another usage of pipe is to validate request body via installing `class-validator` and `class-transformer`
- these packages will be reflected in `Body()` via using built-in decorator `ValidationPipe()`
- you can use any package for validation its not restricted to the 2 mentioned packages

### Guards

Guards in NestJS work in a similar way as in general programming, but its implementation is tightly integrated with the NestJS framework. The responsibility of Guards is to allow or deny access to the NestJS endpoints.

- it can be used for the whole controller or specific methods
