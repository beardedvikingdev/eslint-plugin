# testing if then is not mixed with await (no-await-then-catch)

A rule to make sure no redundant awaits and then is used

## Rule Details

This rule aims to warn you about redundant await and then's

Examples of **incorrect** code for this rule:

```js

const test = async () => {
    await something(event.digit).then((error) => {
        console.log('blaap');
        
    });
}

```

Examples of **correct** code for this rule:

```js

const test = async () => await something(event.digit);

```