const express = require('express');


function create()
{
    var app = express();
}


/* instancing */
var _instance = null;
var getInstance = exports.getInstance = function () { return _instance || (_instance = create()); }
