
# search (`component`)

## Description

This blueprint is based on the blueprint of Veams.

> Just place a generic quote for your type.

-----------

## Requirements
- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.
- [@veams/component](https://github.com/Veams/component) - Veams Component Base Class.

-----------

## Installation

### Installation with Veams from local machine

``` cmd
veams install bp absolute/filepath/to/search
```

### Installation with npm or Veams

When published on npm you can install the component by executing:

``` cmd
veams install c veams-component search
```

-----------

## Fields

### `c-search`


| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| settings.searchClasses | String | | _Modifier classes for component._ | 
| settings.searchContextClass | String | `default` |  - _Context class of component._ |  
| settings.searchJsOptions | Object | | _JavaScript options which gets stringified._ | 

#### Content
| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| content.searchField | String | |  _Please add a description!_ |

-------------

## JavaScript Options

The module gives you the possibility to override default JS options:

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| optionOne | String | `is-option` | _Please add a description!_ |

------------

## Sass Options

| Variable | Value | Description |
|:--- | :---: |:--- |
| $search-my-custom-var | | _Please add a description!_ |
