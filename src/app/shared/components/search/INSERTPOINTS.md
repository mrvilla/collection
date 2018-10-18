
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: search, @tag: component-partial }}
{{#with search.variations.default}}
	{{> search}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-modules-@1 //
Veams.modules.add({namespace: 'search', module: Search});
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for Search
 */
EVENTS.search = {
	eventName: 'search:eventName'
};
// @INSERT :: END
```
