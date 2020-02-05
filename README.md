# mustachejs-loader

A loader for webpack that uses [mustache.js](https://github.com/janl/mustache.js) package.

## Getting started

To begin, you'll need to install mustache and mustachejs-loader:

Yarn

```bash
$ yarn add --dev mustache mustachejs-loader
```

Npm

```bash
$ npm install mustache mustachejs-loader --save-dev
```

**Webpack config**

```javascript
module: {
  rules: [
    {
      test: /\.mustache$/,
      loader: '@aller/mustachejs-loader'
    }
  ]
}
```

**mustache files**

```html
{{! template.mustache }}
<h1>{{ variable }}</h1>
{{ > partial }}
```

```html
{{! partial.mustache }}
<h2>{{ partialText }}</h2>
```

**files.js**

```javascript
import template from 'template.mustache'

const html = template()
```

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

Will produce the following HTML

```html
<h1>Hello world!</h1>
<h2>Sup?</h2>
```

## Partial loader

Webpack config

```javascript
module: {
  rules: [
    {
      test: /\.mustache$/,
      loader: [
        '@aller/mustachejs-loader',
        '@aller/mustachejs-partial-loader',
      ]
    }
  ]
}
```

The [@aller/mustachejs-partial-loader](https://www.npmjs.com/package/@aller/mustachejs-loader) by default fetches all the files with the suffix `.mustache` from the `./partials` directory.

To see available options for the partial loader [click here](https://www.npmjs.com/package/@aller/mustachejs-loader)
