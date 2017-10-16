karma-moment
============

A Karma plugin - adapter for Moment framework.

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-moment --save-dev
```

Add `moment` to the `plugins` property in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    plugins: ['karma-moment']

   //...
```

---

Add `moment` of the version you need to the `frameworks` property in your Karma configuration:
```js
module.exports = function(config) {
  config.set({

    frameworks: ['moment-2.9.0']
    
    //...
```

Note: configure plugin under `karma-moment` name, in the frameworks array speify as `moment-<version>`. Current version of the package is bundled with following Moment versions:
 * 2.9.0
