/**
 * @fileoverview testing if then is not mixed with await
 * @author Bearded Viking
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'testing if then is not mixed with await',
      recommended: false,
    },
    schema: [],
    messages: {
      noAwait: 'the combination with await and then is not allowed',
    },
  },

  create(context) {
    function isFetchOrCatch(node) {
      if (!node.name) return false;

      return node.name === 'then' || 'catch';
    }
    return {
      AwaitExpression(node) {
        const { callee } = node.argument;
        if (!callee.property) return;
        const isFound = isFetchOrCatch(callee.property);
        if (isFound) {
          context.report({
            node: node,
            messageId: 'noAwait',
          });
        }
      },
    };
  },
};
