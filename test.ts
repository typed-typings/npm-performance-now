/// <reference path="bundle.d.ts" />
/// <reference path="typings/index.d.ts" />

import now = require('performance-now');
import assert = require('assert');

assert.equal(typeof now(), 'number');
