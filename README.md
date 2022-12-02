# @beardedviking/eslint-plugin

A plugin for custom rules 

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
npm install @beardedviking/eslint-plugin --save-dev
```

## Usage

Add `@beardedviking` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin` prefix:

```json
{
    "plugins": [
        "@beardedviking"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@beardedviking/rule-name": 2
    }
}
```

## Supported Rules
- no-await-then-catch


