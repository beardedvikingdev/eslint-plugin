# eslint-plugin-eslint-beardedviking

A plugin for custom rules 

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-beardedviking`:

```sh
npm install eslint-plugin-eslint-beardedviking --save-dev
```

## Usage

Add `eslint-beardedviking` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-beardedviking"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-beardedviking/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


