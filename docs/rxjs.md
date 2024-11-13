#RXJS

## What are maps

### Concat Map

ConcatMap queues each new observable and only starts the next one after the previous one completes. It keeps the order of emissions, running them one at a time.
Use concatMap when the order of emissions matters, and you need to complete each asynchronous task before starting the next.

### Merge Map

`mergeMap` is used to map each emitted value to a new observable and merge all resulting observables. It subscribes to all inner observables at once, so they run in parallel.
Use mergeMap when you have multiple asynchronous tasks to run at the same time and don’t care about the order they complete in.

### Switch Map

`switchMap` subscribes to a new observable for each emitted value but cancels the previous observable if a new one comes along. Only the latest observable’s results are emitted.
Use switchMap when you want only the latest result, discarding previous ones. It’s useful in scenarios where only the newest data matters, like search autocomplete where users might be typing quickly.

### Exhaust Map

`exhaustMap` is a higher order pipe operator, which subscribes to the piped observable and for (nearly) each emitted value, returns a new observable, coming from the function you passed to it.
exhaustMap is a bit different. It ignores new values from the source until the current observable completes. In other words, it’s “exhausted” and won’t restart until the current task is done.
Use exhaustMap when you want to ignore incoming events if an operation is already in progress, like submitting a form or handling a button click where you want only one action at a time.

### Differences

MergeMap merges results from multiple observables.
ConcatMap maintains sequential order.
ExhaustMap ignores new requests until the current one completes.
SwitchMap emits values from the latest observable.
ForkJoin waits for all observables to complete before emitting a combined result.

## map

map is the simplest of the operators. It transforms each item emitted by an observable into something else, like applying a function to each item in a list.
Use map when you want to change each emitted value directly without involving other observables or asynchronous operations.
