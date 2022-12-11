# @beardedviking/eslint-plugin

A plugin containing custom rules of all sorts

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
  "plugins": ["@beardedviking"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@beardedviking/<config-name>": "error"
  }
}
```

## Supported Rules

- [no-await-then-catch](docs/rules/no-await-then-catch.md)
- [no-relative-import](docs/rules/no-relative-import.md)
