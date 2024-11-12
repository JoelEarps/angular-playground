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

## Creating Actions

Action Group

createAction

Creating Actions for Failures and Success Scenarios is also Common

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

on function

## Creating Selectors
