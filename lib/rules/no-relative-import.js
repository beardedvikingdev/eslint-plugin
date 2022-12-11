/**
 * @fileoverview Restrict usage of import to not be relative
 * @author Bearded Viking
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Restrict usage of import to not be relative',
      recommended: false,
    },
    schema: [],
    messages: {
      noRelativeImport: "Please don't use relative imports",
    },
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        const importSource = node.source;
        const isRelative = importSource.value.startsWith('.');
        if (isRelative) {
          context.report({
            node: importSource,
            messageId: 'noRelativeImport',
          });
        }
      },
    };
  },
};
