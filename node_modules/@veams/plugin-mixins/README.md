# Veams Mixins Plugin (`@veams/plugin-mixins`)

The Veams Mixins Plugin is something where you can save global mixins. Mixins are object with functions in it which can be used to extend methods in other classes/modules.

TypeScript is supported. 

## Installation

### NPM

``` bash 
npm install @veams/plugin-mixins --save
```

### Yarn 

``` bash 
yarn add @veams/plugin-mixins
```

## Usage

```js
import Veams from '@veams/core';
import VeamsMixins from '@veams/plugin-mixins';

// Intialize core of Veams
Veams.onInitialize(() => {
    // Add plugins to the Veams system
    Veams.use(VeamsMixins);
});
```

### Api

When enabled the Api provides a way to add a mixin to the container `Veams.mixins`.

#### Veams.addMixin('name', mixinFunction)

* @param {`String`} name - Mixin name which will be used in the registration process.
* @param {`Function`} mixinFunction - The mixin function should return an object with methods.

The method allows the registration of provided or custom mixins.

```js
// My custom mixins
import imageLoader from './utils/mixins/image-loader';

Veams.addMixin('imageLoader', imageLoader);
```

Later you can use this specific mixin in other modules:

```js
myClass.mixin(Veams.mixins.imageLoader);
```

Here you see that you need to extend your custom class with the helper function `mixin`, which is available in `@veams/helpers`.
