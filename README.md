# patch-styles

> auto patch css/scss modules to children

[![NPM](https://img.shields.io/npm/v/patch-styles.svg)](https://www.npmjs.com/package/patch-styles) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save patch-styles
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'patch-styles'
import 'patch-styles/dist/index.css'

class Example extends Component {
  render() {;
    return <MyComponent />
  }
}
```

## License

MIT © [hakobpogh](https://github.com/hakobpogh)
