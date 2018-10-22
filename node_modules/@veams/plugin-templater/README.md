[//]: # ({{#wrapWith "content-section"}})

[//]: #     ({{#wrapWith "grid-row"}})
[//]: #         ({{#wrapWith "grid-col" colClasses="is-col-tablet-l-8"}})

# Veams Templater Plugin (`@veams/plugin-templater`)

This plugin adds the possibility to render your `handlebars` templates in an easy way. You can register the engine, templates, partials and helpers and use them directly in other classes.

TypeScript is supported. 

-----------------

## Installation

### NPM

``` bash 
npm install @veams/plugin-templater --save
```

### Yarn 

``` bash 
yarn add @veams/plugin-templater
```

-----------------

## Usage

```js
import Veams from '@veams/core';
import TemplaterPlugin from '@veams/plugin-templater';
import handlebars from 'handlebars/runtime';
import { templates } from './templates';
import { customHelper } from './helpers';

// Intialize core of Veams
Veams.onInitialize(() => {
   	// Add plugins to the Veams system
	
    // Add plugins to the Veams system
    Veams.use(TemplaterPlugin, {
        engine: handlebars,
        templates: templates,
        helpers: [
            customHelper
        ]
    });
});
```

### Options

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| _engine_ | {`Function`} | [`null`] | Provide the handlebars engine instance. |
| _templates_ | {`Function`} | [`null`] | Provide your precompiled handlebars templates. |
| _partials_ | {`Function`} | [`null`] | You can provide additional partials. |
| _helpers_ | {`Array`} | [`[]`] | Add custom handlebars helpers. |

### API

When enabled you can render your template by simple executing the `Veams.templater.render()`:

```js
// Render the template
$(body).append(
    Veams.templater.render('test-template', {data: 'custom data passed to partial'})
);
```

[//]: #         ({{/wrapWith}})
[//]: #     ({{/wrapWith}})

[//]: # ({{/wrapWith}})