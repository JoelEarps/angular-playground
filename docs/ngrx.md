# NGRX

This is a store that provides state management for angular applications, inspired by Rust. It unifies the events and dervive state using RxJS

There are many available

Will set up ngrx store and effects

The hekaton frontend uses:

"@ngrx/effects": "14.0.2", - used 183 times
"@ngrx/entity": "14.0.2", - used 12 times
"@ngrx/router-store": "14.0.2", - used 13 times
"@ngrx/store": "14.0.2", - used 578 times
"@ngrx/store-devtools": "14.0.2", - used 3 times (once in actual file in app module)

Version wise these are all older at about 18.1.1

Fetching typically done using effects
Store used to store this info

## Why use NGRX

As the amount of data increases it gets really hard to tell how data flows, also you have to continuously call APIS, this is bad practice and can cause performance issues

Fudamentals

1. Store is essentially a local database - this is the centralised state.
2. Selectors - how data is fetched from the store. They are queries.
3. Action - an action that pushes data to the store.
4. Reducer - called by an action, responsible for handling transitions from one state to the next state in the application. They choose the transitions based on the type of actions that have been called. They are pure functions that produce the same output everytime.

Installation

When using standalone you have an index.ts

We need to add the store to the app config

In the future you want to turn this into the module format to make it representative.

### Adding to standalone app

provide state to app config through providers

provideStore(),
provideEffects([]),

NullInjectorError: No provider for InjectionToken @ngrx/store Root Store Provider!

Store updates are immutable, you are overwriting data, you cannot update information and pass that to a store. You have to directly replace what is in the current store.

## Root vs Feature

StoreModule.forRoot({}),
StoreModule.forFeature

The forRoot method is invoked in the AppModule and, generally, once in the application to initialize the Store and provide the initial reducers/actions/state configuration. If you use the EffectsModule, you'll invoke the forRoot method on this module too:

@ngModule({ imports: [ StoreModule.forRoot(), EffectsModule.forRoot() ] }) class AppModule {}

The forFeature method is invoked in any feature module that requires it's own part of the state management: as an example, an UserModule will define it's own portion of the state, describing the required actions, reducers and so on. If you use the EffectsModule, remember to invoke the forFeature method against it too. As you may have understood by yourself, forFeature (as the more generic Angular's forChild method) can be invoked multiple times for the same imported module in the application:

Its used with lazy loaded reducers. When you have (lazy loaded) feature modules and you want to register reducers within that module, then you use forFeature. Otherwise, in your AppModule you use forRoot.

## Creating Actions

### Action Group

The createActionGroup function creates a group of action creators with the same source. It accepts an action group source and an event dictionary as input arguments, where an event is a key-value pair of an event name and event props.

### createAction

Creates a configured Creator function that, when called, returns an object in the shape of the Action interface.

Creating Actions for Failures and Success Scenarios is also Common.

export const sendForgotPwEmail = createAction(`${forgottenPasswordPrefix} Send Forgot Password Email`, props<{ email: string }>());
export const sendForgotPwEmailSuccess = createAction(`${forgottenPasswordPrefix} Send Forgot Password Email Success`);
export const sendForgotPwEmailFailed = createAction(`${forgottenPasswordPrefix} Send Forgot Password Email Failed`);
export const resetEmailSent = createAction(`${forgottenPasswordPrefix} Reset Email Sent`);

## Creating Reducers

export const myGitInfoReducer = createReducer(
initialState,
on(myGitInfoAction, (state, actions) => {})
);

create reducer needs an initial state and something to do upon an action being called.

### on function

Creates a reducer function to handle state transitions.

## Creating Selectors

createFeatureSelectors
createSelectors

## Effects

You can have functional or class based effects

Effects are designed to extract any side-effects (such as Network calls) from components and handle potential race conditions. They perform operations either async or sync - they are observables listening for inputs and piping them through prescription.

Key Concepts
Effects isolate side effects from components, allowing for more pure components that select state and trigger updates and/or effects in ComponentStore(s).
Effects are Observables listening for the inputs and piping them through the "prescription".
Those inputs can either be values or Observables of values.
Effects perform tasks, which are synchronous or asynchronous.
effect method
The effect method takes a callback with an Observable of values, that describes HOW new incoming values should be handled. Each new call of the effect would push the value into that Observable.

```
loadGitInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchGitInfo),
      exhaustMap(() =>
        this.fetchGitInfoService.getGitInfo().pipe(
          map((gitTitle: any) => {
            return fetchGitInfoActionSuccess(gitTitle);
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });
```

First of all we create the effect using the createEffect function from ngrx.
This function takes a function that returns an observable stream of actions
this.actions$.pipe - actions is provided by NGRx that emits every action dispatched to the store
Pipe then chains operators together to process each emitted action.
ofType - this function is used to filter action based on type.
Here when the fetchGitInfo Action is observed they will continue through the pipe

map is an RxJS operator that transforms the emitted data.
Here, (gitTitle: any) => ... takes the result of getGitInfo() as gitTitle.
fetchGitInfoActionSuccess(gitTitle) is returned, which creates a success action containing the fetched data. This action is dispatched to the store automatically, thanks to createEffect.

this.fetchGitInfoService.getGitInfo() represents a service call that retrieves Git information, usually via an HTTP request.
This method returns an observable, so pipe is used to process the data once the observable emits a result.
catchError is an RxJS operator used for error handling.

If the getGitInfo() call fails (e.g., network error), catchError intercepts the error and returns EMPTY, an observable that completes without emitting a value.
Returning EMPTY means no further action is dispatched in case of an error, but you could modify this to dispatch an error action instead for better error handling.

## Bringing it all together

```
export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore(),
    provideState(gitInfoFeature),
    provideEffects([GitInfoEffects]),
    provideHttpClient(),
  ],
};
```

As mentioned earlier, appConfig is bootstrapped to the main application component. The following functions bind the relevant components of the NGRx store to the application, in this instance the component.

provideStore - Provides the global Store providers and initializes the Store. These providers cannot be used at the component level.
provideState - Provides additional slices of state in the Store. These providers cannot be used at the component level.
provideEffects - Provide effects to the application, can be done at global level or feature level.

## Dispatching Actions

Dispatching is the act of triggering an action to be performed.

## On Init

ngOnInit

ngOnInit is a lifecycle hook provided by Angular, specifically designed for components. It is called once, after Angular has initialized all data-bound properties of a component and the component's view.
