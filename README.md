# dom-gen v0.1.0

> Utility for dom generation, a jquery plugin

# Install

    npm install dom-gen

# Usage

## div()

```js
import {div} from 'dom-gen'

div() // This creates an empty div element
```

The above calls is the same as `$('<div/>')`. You can chain jquery method calls like the following

```js
div().text('Hello').appendTo('#main')
```

## div(opts)

You can pass generation options as the parameter.

```js
div({ data: { x: 0, y: 1 }, addClass: 'container', appendTo: '#main' })
```

The above is the same as:

```js
$('<div/>', { data: { x: 0, y: 1 }, addClass: 'container', appendTo: '#main' })
```

or:

```js
$('<div/>').data({ x: 0, y: 1 }).addClass('container').appendTo('#main')
```

Another example

```js
img({ attr: { src: 'path/to/img' }, appendTo: '#some-place' })
```

is the same as:

```js
$('<img/>').attr('src': 'path/to/img').appendTo('#some-place')
```


## Supported tags

    div, span, main, footer, img, br, hr, h1, h2, h3, h4, h5, h6, small, big, strong

## Generic API

```js
import domGen from 'dom-gen'

const xTag = domGen('x-tag') // This works as the same as other tag generators
```

# License

MIT
