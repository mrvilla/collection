<p align="right">
    <a href="https://badge.fury.io/js/%40veams%2Fcomponent-toggler"><img src="https://badge.fury.io/js/%40veams%2Fcomponent-toggler.svg" alt="npm version" height="18"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Toggler

## Description

Represents a simple toggler component with global event binding when necessary.

-----------

## Requirements

- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.
- [@veams/query](https://github.com/Veams/query) or `jquery` - Veams Query or jQuery.
- [@veams/component](https://github.com/Veams/component) - Veams Component.
- [@veams/helpers](https://github.com/Veams/helpers) - Veams Detection Helpers.

-----------

## Installation

``` bash 
veams install component toggler
``` 

``` bash 
veams -i c toggler
```

-------------

## Fields

### toggler

#### Settings

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| settings.togglerContextClasses | String | `default` | _Context class._ |
| settings.togglerClasses | String | | _Modifier classes._ |
| settings.togglerJsOptions | Object | | _Options object which gets stringified._ |
| settings.togglerJsModule | Boolean | | _Specify if component is a Javascript module or not._ |
| settings.togglerJsModuleWithContext | String | | _Reference to specific Javascript module toggler context._ |
| settings.togglerId | String | | _Id to reference specific toggler component instance._ |
| settings.attributes | Array | | _List of attributes that consist of name value pairs._ |

#### Content

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| content.togglerField | String | | _Add description._ |

-------------

## JavaScript Options

The module gives you the possibility to override default options:

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| a11yFocusKeyClass | String | `'a11y-focus-key'` | _Class for the accessibility focus key._ |
| calculatingClass | String | `'is-calculating'` | _Class used to display calculating state._ |
| closeClass | String | `'is-closed'` | _Class when toggler is closed._ |
| context | Boolean | `false` | _Context property that gets passed to toggler open event._ |
| dataMaxAttr | String | `'data-js-height'` | _Dynamic max height attribute._ |
| globalEvent | String | `''` | _Reference to global event that when triggered calls toggle method._ |
| globalEventId | String | `''` | _Compare toggler's globaleventid with the globaleventid of the object that triggered the toggle method to determine if toggle should be run or aborted._ |
| openClass | String | `'is-open'` | _Class when toggler is open._ |
| setOverflow | Boolean | `false` | _Specify if overflow should be set or not._ |
| toggleTabindexElems | String | `''` | _Selector that targets elements to toggle tab-index._ |

-------------

## SASS Options

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| $toggler-animation-duration-std | String | `500ms` | _Duration of the toggle animation._ |
| $toggler-animation-easing-std | Function | `ease-in-out` | _Easing method of the animation._ |

-------------