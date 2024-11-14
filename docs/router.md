# Angular Router

This maps URL paths to a component in order to be able to navigate

## Creating a Router component

The application needs the two following components to have intellisense and to create a new router

RouterModule - Creates a configures a module with all the router directives
RouterLink - When applied to an element in a template, makes that element a link that initiates navigation to a route. Navigation opens one or more routed components in one or more <router-outlet> locations on the page.

NgContainer

Once you have imported these two you can create routing very simply as follows

However, when you click one of the links, the following error will occur as you haven't set up anything to handle these links

```
RuntimeError: NG04002: Cannot match any routes. URL Segment: 'repoName/Applied-Machine-Learning---Foundations'
```

Dynamic Routes

Lazy Loading

```
{
    path: 'github/:repoName',
    loadComponent: () =>
      import('./components/static-page/static-page.component').then(
        (m) => m.StaticComponent
      ),
  },
```

### Common Problem

When routing if the page loads when
