/**
 * @file Build swan smart program build config
 * @author mazhiwen
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    polyfill: ['async'],
    // wx2swan: true,
    rules: []
});
