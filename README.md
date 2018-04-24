---
[![npm version](https://badge.fury.io/js/malta-jshint.svg)](http://badge.fury.io/js/malta-jshint)
[![Dependencies](https://david-dm.org/fedeghe/malta-jshint.svg)](https://david-dm.org/fedeghe/malta-jshint)
[![npm downloads](https://img.shields.io/npm/dt/malta-jshint.svg)](https://npmjs.org/package/malta-jshint)
[![npm downloads](https://img.shields.io/npm/dm/malta-jshint.svg)](https://npmjs.org/package/malta-jshint)  
---  

This plugin can be used on: **.js** files and even on **.coffee** and **.ts** files after using the right plugin

Options : all options of the [jshint package](http://jshint.com/docs/options/)

Sample usage:  
```
malta app/source/index.js public/js -plugins=malta-jshint[bitwise:false,maxcomplexity:8]
```
or in the .json file :
```
"app/source/index.js" : "public/js -plugins=malta-jshint[bitwise:false,maxcomplexity:8]",
"app/source/index.ts" : "public/js -plugins=malta-typescript...malta-jshint[bitwise:false,maxcomplexity:8]"
```
or in a script : 
``` js
var Malta = require('malta');
Malta.get().check([
    'app/source/index.js',
    'public/js',
    '-plugins=malta-jshint[bitwise:false,maxcomplexity:8]',
    '-options=showPath:false,watchInterval:500,verbose:0'
    ]).start(function (o) {
        var s = this;
        console.log('name : ' + o.name)
        console.log("content : \n" + o.content);
        'plugin' in o && console.log("plugin : " + o.plugin);
        console.log('=========');
    });
```