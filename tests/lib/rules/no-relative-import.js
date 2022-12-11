/**
 * @fileoverview Restrict usage of import to not be relative
 * @author Bearded Viking
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-relative-import'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2017, sourceType: 'module' },
});

ruleTester.run('no-relative-import', rule, {
  valid: [
    "import test from 'test.vue'",
    "import test from '@/test.vue'",
    "import test from '@/components/name/test.vue'",
  ],

  invalid: [
    {
      code: "import test from './test.vue'",
      errors: [{ messageId: 'noRelativeImport' }],
    },
    {
      code: "import test from '../test.vue'",
      errors: [{ messageId: 'noRelativeImport' }],
    },
  ],
});
