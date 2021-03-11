# ESLint Config
[![Build](https://github.com/vipulwairagade/eslint-config/actions/workflows/test.yml/badge.svg)](https://github.com/vipulwairagade/eslint-config/actions?query=workflow%3ATest) [![License](https://img.shields.io/github/license/vipulwairagade/eslint-config)](https://github.com/vipulwairagade/eslint-config/blob/main/LICENSE)
## What's this ?
This is base eslint configuration which can be used across projects without need to maintain all rules project wise. We can add project wise rule changes if required any.

## How to Use ?
 ### Install 
 `npm install`

Then in ESLint config object i.e `.eslintrc` , use `extends : ""` as given below

```
{
  "root": true,
  "extends": "",
  "env": {
    "node": true
  },
  "rules": {
    // Overrides
  }
}
```

## Authors
* **Vipul Wairagade**

See also the list of [contributors](https://github.com/vipulwairagade/eslint-config/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/vipulwairagade/eslint-config/blob/main/LICENSE) file for details.
