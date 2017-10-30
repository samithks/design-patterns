require([], function (arguments) {
    'use strict';

    var examples = {};

    window.runExample = function (example) {
        examples[example].init();
    }
})