# Veams DOM Plugin (`@veams/plugin-dom')

The Veams DOM Plugin is simple plugin for which you need to pass a DOM handler like jQuery.

TypeScript is supported. 

## Installation

### NPM

``` bash 
npm install @veams/plugin-dom --save
```

### Yarn 

``` bash 
yarn add @veams/plugin-dom
```

## Usage

```js
import $ from 'jquery';
import Veams from '@veams/core';
import VeamsDOM from '@veams/plugin-dom';

// Intialize core of Veams
Veams.onInitialize(() => {
   	// Add plugins to the Veams system
	Veams.use(VeamsDOM, {
        DOM: $
    });
});
```

### Options

_DOM_ {`Function`} [`() => {}`] (required) - Add a DOM handler by using this option. It should have the same api like jQuery.


## Api

After that your DOM instance is available in the Veams object: 

``` js
Veams.$('.page-wrapper').addClass('is-working');
```
