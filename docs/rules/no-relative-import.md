# Restrict usage of import to not be relative (no-relative-import)

Please describe the origin of the rule here.

## Rule Details

This rule is for when you use non relative path's for your imports.

Examples of **incorrect** code for this rule:

```js
import something from './components/something.vue';
import something from '../utils/something.ts';
```

Examples of **correct** code for this rule:

```js
import something from '@/components/something.vue';
import something from '@/utils/something.ts';
```

## When Not To Use It

If you prefer relative imports
