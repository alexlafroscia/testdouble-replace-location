# Demonstrate inability to replace `window.location` methods

This repo contains an example test that fails because `window.location` is unable to have its methods replaced by Testdouble.js.

Related issue: [testdouble/testdouble.js#183](https://github.com/testdouble/testdouble.js/issues/183)

## Setup

```bash
yarn
yarn testem
```

Then open your browser to `localhost:7357`.

Note: it should be a modern browser like Chrome, because the test script uses some ES6 stuff.
