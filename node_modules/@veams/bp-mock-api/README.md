# Veams Blueprint :: Mock API Endpoint (`@veams/bp-mock-api`)

With this blueprint you can scaffold a mock api endpoint with following options:

1. Which methods do you want to provide by your endpoint?


## Setup

1. First of all be sure you have installed `veams-cli`.
1. After that be sure your project contains a [`veams-cli.json`](https://github.com/Sebastian-Fitzner/generator-veams/blob/dev/generators/app/templates/veams-cli.json).
1. Make sure you have updated `veams-cli.json` to fit the needs of your project.
1. Install the package with `npm i @veams/bp-mock-api --save-dev`.
1. Reference the package in `veams-cli.json` by adding `api` to the `blueprint` object like so:

``` json
{
    "blueprints": {
        "api": {
            "skipImports": true,
            "path": "node_modules/@veams/bp-mock-api"
        }
    }
}
```

## Usage

Now you can use this blueprint with `veams` by executing:

``` bash
veams add api server/routes/api/articles
```

 The output in your file system will be:

``` bash
└── articles
    └── controller.js
    └── index.js
    └── model.js
    └── USAGE.md
```

Be sure to add the snippet in `USAGE.md` into `src/server/routes/api/index.js` to register the route.

Have fun!