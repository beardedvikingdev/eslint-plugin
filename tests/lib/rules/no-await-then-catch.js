/**
 * @fileoverview testing if then is not mixed with await
 * @author Bearded Viking
 */
"use strict";

const rule = require("../../../lib/rules/no-await-then-catch"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run("no-await-then-catch", rule, {
  valid: [
    {
      code: `async () => {
        await something(event.digit);
      }`
    },
    'const test3 = async () => await something(event.digit);'
  ],

  invalid: [
    {
      code: `const test = async () => {
        await something(event.digit).then((error) => {
          console.log('blaap');
          
        });
      }
      `,
      errors: [{ messageId: "noAwait", type: "AwaitExpression" }],
    },
  ],
});
