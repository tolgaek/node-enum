node-enum
=========

Simple enum library for creating and using enums

Usage
-----

```javascript
var enumFactory = require("simple-enum");

var moods = enumFactory(["HAPPY", "SAD", "EXCITED"]);

moods.all === [1,2,3] //True

moods.all.indexOf(moods.HAPPY) > -1 //True

moods.HAPPY === 1 //True

moods.SAD ===2 //True

```
