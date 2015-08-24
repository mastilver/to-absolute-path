'use strict';

var path = require('path');

var caller = require('caller');
var isArray = require('isarray');

module.exports = function (paths, depth) {

    if(depth === undefined){
        depth = 0;
    }

    depth++;

    var contextDir = path.dirname(caller(depth));

    if(isArray(paths)){
        return paths.map(function(path){
            return transformPath(contextDir, path);
        });
    }

    return transformPath(contextDir, paths);
};

function transformPath(contextDir, filePath){

    var prefix = '';

    if(filePath.slice(0, 1) === '!'){
        prefix = '!';
        filePath = filePath.slice(1);
    }

    return prefix + path.resolve(contextDir, filePath);
}
