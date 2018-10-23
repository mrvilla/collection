## Usage

### Include Snippet for Page

``` hbs
{{! @INSERT :: START @id: toggler, @tag: component-partial }}
{{#with toggler-bp}}
	{{#wrapWith "toggler"}}
		Wrapped with markup from toggler.
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing with `@veams/plugin-modules`

``` js
// @INSERT :: START @tag: js-init-modules-@1 //
	// Init Toggler
    Veams.modules.add({ namespace: 'toggler', module: Toggler });
// @INSERT :: END
```

``` js
// @INSERT :: START @tag: js-events //
/**
 * Events Toggler
 */
EVENTS.toggler = {
	toggle: 'toggler:toggle',
	open: 'toggler:open',
	close: 'toggler:close'
};
// @INSERT :: END
```
