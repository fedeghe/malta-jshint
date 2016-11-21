This plugin can be used on: **.js** files and even on **.coffee** and **.ts** files after using the right plugin

Options : all options of the [jshint package](http://jshint.com/docs/options/)

Sample usage:  

    malta app/source/index.js public/js -plugins=malta-jshint[bitwise:false,maxcomplexity:8]

or in the .json file :

    "app/source/index.js" : "public/js -plugins=malta-jshint[bitwise:false,maxcomplexity:8]",
    "app/source/index.ts" : "public/js -plugins=malta-typescript...malta-jshint[bitwise:false,maxcomplexity:8]"

or in a script : 

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
