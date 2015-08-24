'use strict';

var path = require('path');

require('should');

var toAbsolutePath = require('../index');


var context = require('./fixtures/first');


describe('get absolute path', function(){
    describe('current context', function(){
        it('should return the right path', function(){
            context(function(){
                toAbsolutePath('test.file').should.be.equal(path.normalize(process.cwd() + '/test/test.file'));
            });
        });
    });

    describe('one level depth context', function(){
        it('should return the right path', function(){
            context(function(){
                toAbsolutePath('test.file', 1).should.be.equal(path.normalize(process.cwd() + '/test/fixtures/test.file'));
            });
        });
    });

    describe('two level depth context inside folders', function(){
        it('should return the right path', function(){
            context(function(){
                toAbsolutePath('test.file', 2).should.be.equal(path.normalize(process.cwd() + '/test/fixtures/folder/test.file'));
            });
        });
    });

    describe('three level depth context', function(){
        it('should return the right path', function(){
            context(function(){
                toAbsolutePath('test.file', 3).should.be.equal(path.normalize(process.cwd() + '/test/fixtures/test.file'));
            });
        });
    });

    describe('too depth context', function(){
        it('should use the root path', function(){
            context(function(){
                toAbsolutePath('test.file', 100).should.be.equal(path.normalize(process.cwd() + '/test.file'));
            });
        });
    });
});

describe('handle array', function(){
    it('should return multiple paths', function(){
        toAbsolutePath(['first.file', 'second.file']).should.be.deepEqual([path.normalize(process.cwd() + '/test/first.file'), path.normalize(process.cwd() + '/test/second.file')]);
    });
});

describe('handle negative file', function(){
    it('should keep the negative flag', function(){
        toAbsolutePath('!test.file').should.be.equal(path.normalize('!' + process.cwd() + '/test/test.file'))
    });
});
