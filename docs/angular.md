# Angular Notes

## Components

`@components` decorator

A fundamental building block of an angular application. Typically they contain:

1. A HTML view page class file
2. A class to control interactions with the page
3. A CSS/SCSS/LESS page for dictating style of that page.

## How to make more components

Do they all go in the same folder e.g. app or can you separate them into different modules like NestJS. Angular tries to recommend using the feature by folder structure. Where you separate components, services and styling for particular aspects of the app by feature.

## Angular Material

A UI library similar to that of Material UI for React.
https://material.angular.io/

## Angular Services

A very broad term relating to functions, resources, variables that an application needs, it is typically a class based component.

Creating a service

### Injectable

Most services are provided through dependency injection. Dependency injection (DI) is the part of the Angular framework that provides components with access to services and other resources. Angular provides the ability for you to inject a service into a component to give that component access to the service.

### HTTP Service inbuilt

Most front-end applications need to communicate with a server over the HTTP protocol, to download or upload data and access other back-end services. Angular provides a client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.

provideHttpClient() is a mechanism of accessing this.

Using this returns an Observable which is a stream of data, in order to work with Observable data you need to add `$` to the variable name.

The `$` suffix does not have any special functionality or meaning in JavaScript or Angular. It is purely a convention that helps developers quickly identify which variables represent observables, as opposed to regular values. This is particularly useful in Angular applications that rely heavily on RxJS observables for reactive programming.

## Angular Modules

A module is a collection of services, components and directive pipes etc. It allows you to group things into a single module and group functionality and behaviour.

### Angular Common Modules

Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on. Re-exported by BrowserModule, which is included automatically in the root AppModule when you create a new app with the CLI new command.

## Import TS Config Item

useDefineForClassFields: false

This being true by default was causing the following errors

Property 'store' is used before its initialization.

When injecting the store into and try and create a public field for access.

This flag is used as part of migrating to the upcoming standard version of class fields. TypeScript introduced class fields many years before it was ratified in TC39. The latest version of the upcoming specification has a different runtime behavior to TypeScript’s implementation but the same syntax.

When useDefineForClassFields is enabled (set to true), TypeScript will use JavaScript’s [[Define]] semantics for initializing class fields instead of [[Set]] semantics.

This distinction impacts when and how fields are set on an object, especially when dealing with inheritance and property descriptors.

Key Differences Between [[Define]] and [[Set]] Semantics
Define semantics ([[Define]]): This is the newer standard. When useDefineForClassFields is true, fields are defined directly on the instance, ignoring any existing setter methods in the prototype chain. This is the default behavior of class fields in JavaScript as per the latest ECMAScript specification.

Set semantics ([[Set]]): When useDefineForClassFields is false, TypeScript will use [[Set]] semantics, meaning it will check the prototype chain for a setter before defining the property directly on the instance. This was TypeScript’s legacy behavior and can sometimes lead to unintended results when subclassing.
