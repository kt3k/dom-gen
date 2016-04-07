# dom-gen v1.2.0

> Utility for dom generation, a jquery plugin

# Idea

This tool is basically the shorthand of `$('<tagName/>', opts)`. You can write the above like `tagName(opts)` with this tool.

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

    div
    span
    p
    h1
    h2
    h3
    h4
    h5
    h6
    form
    input
    label
    textarea
    select
    option
    hr
    br
    ul
    ol
    li
    small
    big
    strong
    i
    b
    s
    address
    sub
    sup
    table
    tr
    th
    td
    dl
    dt
    dd
    main
    header
    nav
    aside
    article
    footer

## Generic API

```js
import domGen from 'dom-gen'

const xTag = domGen('x-tag') // This works as the same as other tag generators
```

# Recipes

## Complex construction

```js
div().append(
  h2().text('Hello'),
  div().addClass('greeting').append(
    p().append(
      'Hello, this is ',
      span().addClass('green').text('example'),
      'page!'
    )
  )
)
```

# License

MIT
