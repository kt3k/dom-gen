# dom-gen v1.2.1 [![Circle CI](https://circleci.com/gh/kt3k/dom-gen.svg?style=svg)](https://circleci.com/gh/kt3k/dom-gen) [![codecov.io](https://codecov.io/github/kt3k/dom-gen/coverage.svg?branch=master)](https://codecov.io/github/kt3k/dom-gen?branch=master)

> Utility for dom generation, a jquery plugin

# Idea

This tool is a shorthand of `$('<tagName/>', opts)`. You can write it like `tagName(opts)` with this tool.

# Install

    npm install dom-gen

# Usage

**NOTE** dom-gen supposes $ is exposed in global namespace. You need to put jquery on global namespace first.

## div()

```js
import {div} from 'dom-gen'

div() // This creates an empty div element.
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

## div(opts, param0, [param1, ...])

You can pass additional params to `div` function and they are `$.fn.append`ed to the element.

```js
div({addClass: 'main'}, div({addClass: 'container'}, 'Hello'))
```

is the same as the follwoing jquery call:

```js
$('<div/>', {addClass: 'main'}).append($('<div/>', {addClass: 'container'}).append('Hello')
```
which is equivalent of the following html:

```js
<div class="main"><div class="container">Hello</div></div>
```

You can even omit first param `opts` if it's empty.

```js
div(p(span('Hello'), ' ', span('world!'))
```

is equal to:

```
<div><p><span>Hello</span> <span>world!</span></p></div>
```


## Supported tags

`dom-gen` exports following tags by default for now. You can import them directly from `dom-gen` and use them as generator functions.

```js
div()
span()
p()
h1()
h2()
h3()
h4()
h5()
h6()
form()
input()
label()
textarea()
select()
option()
hr()
br()
ul()
ol()
li()
small()
big()
strong()
i()
b()
s()
address()
sub()
sup()
table()
tr()
th()
td()
dl()
dt()
dd()
main()
header()
nav()
aside()
article()
footer()
```

## Create your own

You can create the generator for your own tag.

```js
import domGen from 'dom-gen'

const xTag = domGen('x-tag')

xTag({addClass: 'foo'}, p('Hello')) // This is equivalent of <x-tag class="foo"><p>Hello</p></x-tag>
```

# Recipes

## Mix inline html and dom-gen composition

Inline elements are often better not to use dom-gen for creating.

```js
p('Hello, this is <span class="green">example</span> page!')
```

is a bit better readable than:

```
p(
  'Hello, this is ',
  span({addClass: 'green'}, 'example'),
  'page!'
)
```

## Complex construction

```js
import {div, h2, p} from 'dom-gen'

div(
  h2('Hello'),
  div({addClass: 'greeting'},
    p('Hello, this is <span class="green">example</span> page!')
  ),
  hr()
)
```

is equivalent of the following html:

```html
<div>
  <h2>Hello</h2>
  <div class="greeting">
    <p>Hello, this is <span class="green">example</span> page!</p>
  </div>
  <hr/>
</div>
```

# License

MIT

# Similar projects

- Ruby
  - [Markaby][Markaby] Ruby
  - [Builder][Builder] Ruby
  - [Nokogiri HTML Builder][Nokogiri HTML Builder] Ruby
- JavaScript
  - [jm][jm] JavaScript
  - [hyperscript][hyperscript] JavaScript
- CoffeeScript
  - [space-pen][space-pen] CoffeeScript (Not maintained)
  - [funcd][funcd] CoffeeScript

[space-pen]: https://github.com/atom-archive/space-pen
[hyperscript]: https://github.com/dominictarr/hyperscript
[funcd]: https://github.com/mgutz/funcd
[jm]: https://github.com/smtlaissezfaire/jm
[Markaby]: https://github.com/markaby/markaby
[Builder]: https://github.com/jimweirich/builder
[Nokogiri HTML Builder]: http://www.rubydoc.info/github/sparklemotion/nokogiri/Nokogiri/HTML/Builder
