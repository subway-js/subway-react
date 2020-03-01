# subway-react

> Tools for developing your SubwayJS app with React

[![NPM](https://img.shields.io/npm/v/subway-react.svg)](https://www.npmjs.com/package/subway-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save subway-react
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'subway-react'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [subway-js](https://github.com/subway-js)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
