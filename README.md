# ESLint Config
[![Build](https://github.com/vipulwairagade/eslint-config/actions/workflows/test.yml/badge.svg)](https://github.com/vipulwairagade/eslint-config/actions?query=workflow%3ATest)
[![npm](https://img.shields.io/npm/v/eslint-config-vipul-base.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-vipul-base)
[![downloads](https://img.shields.io/npm/dm/eslint-config-vipul-base.svg?style=flat-square)](https://npm-stat.com/charts.html?package=eslint-config-vipul-base&from=2021-01-01)
[![License](https://img.shields.io/github/license/vipulwairagade/eslint-config)](https://github.com/vipulwairagade/eslint-config/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
## What's this ?
This is base eslint configuration which can be used across projects without need to maintain all rules project wise. We can add project wise rule changes if required any.

**Note:** This configuration uses ESLint's new flat config format, compatible with ESLint 9.0+.

## How to Use ?
 ### Install
 `npm i eslint-config-vipul-base`

Then in your ESLint config file (e.g., `eslint.config.js`):

```javascript
import vipulBase from 'eslint-config-vipul-base';

export default [
  ...vipulBase,
  {
    // Your project-specific overrides
    rules: {
      // Override rules here
    }
  }
];
```

For legacy `.eslintrc` format (ESLint < 9.0), please use version 1.2.1 or earlier of this package.

## Authors
* **Vipul Wairagade**

See also the list of [contributors](https://github.com/vipulwairagade/eslint-config/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/vipulwairagade/eslint-config/blob/main/LICENSE) file for details.