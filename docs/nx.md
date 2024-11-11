# NX

An open source build system that provides tools and techniques for enhancing developer efficiency. It provides CI integration, parrallelisation, caching, automating dependency updates.

## Standalone vs Monorepo vs Package Repo

NX allows you to structure your project in one of three ways:

1. Standalone - single app in a repo.
2. Package based repo - multiple projects that use a single package.json and nested json modules.
3. Integrated (Monorepo) - A repository with multiple projects that depend on each other via typescript imports and often employ a single version policy

## Bundlers

These are crucial in web development where we combined mutliple JS files and their dependecies into one file - typically

### Esbuild vs Webpack

Chose Webpack as I believe this is what the hekaton FE uses.

Webpack is more mature and known for its extensive eco system and configurability. It is a module bundler that bundles all files and assets into one file to be served to the browser. It has tools such as loaders, plugins and tree shaking.

Esbuild is newer, written in go so quicker and has gain traction due to performance. It claims to be 10x - 100x faster and is perfect for projects where speed is critical and config complexity is low.

| WebPack             | Esbuild                |
| ------------------- | ---------------------- |
| Slow                | Fast                   |
| Configurable        | Minimal                |
| Tyepscript by babel | Typescript by default  |
| CSS Loader          | Needs Plugins for this |

## Default Stylesheet

There were three options here:

1. CSS - Cascading Stylesheet - one file to define styles in default html, can become massive but is supported by all browsers.
2. SCSS - Sassy CSS - superset of CSS and contains a pre processor for advanced features e.g. nesting but requires compilation.
3. LESS - Leaner StyleSheets - similar to SCSS but contains less features.

## SSR and Static Site Generation

## Test Runners

Tools that run test on code.

### Playwright

More performant than Cypress.
Parallel Execution.
Steeper Learning Curve.

### Cypress

Very user friendly, user centric features with nice coverage and reporting.
Runs in browser and better for JS.
Limited browser support

## CI Providers

## Remote Caching

## File structure

Initial set up gives you the following:

1. Apps - Where the main
2. E2E - End to end test folder
3. nx folder - a list of build and local info for the nx monorepo
4. Public - static files copied as is to the app e.g. images
5. Libs - the shared library folder created and managed by nx.

## The Application

The main entry point is `main.ts` it uses this file to start and bootstrap the application. This passes in the AppConfig which is essentially a router with standalone APIs.
There is also an AppComponent - which is a standalone component where don't define angular modules

All these components gets loaded into the index.html

Providers are giving a list of services that are available to the application. You can pass standalone APIs as well e.g. the routers
