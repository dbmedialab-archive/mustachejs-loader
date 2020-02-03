# Mustache.js loader for webpack

## Usage

### Webpack config

```javascript
module: {
  rules: [
    {
      test: /\.mustache$/,
      loader: 'mustache'
    }
  ]
}
```

### Render template

```javascript
import template from 'template.mustache'

const html = template()
```

### With variables

```javascript
import template from 'template.mustache'

const html = template({ variable: "Hello world!" })
```

### With partials

```javascript
import template from 'template.mustache'
import { templateString } from 'partial.mustache'

const html = template(
  { variable: "Hello world!", partialText: "Sup?" },
  { partial: templateString }
)
```
