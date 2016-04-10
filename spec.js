import domGen, {div} from './src'
import './spec-helper'

import {expect} from 'chai'

describe('div()', () => {

  it('creates jquery object of empty div', () => {

    const elem = div({addClass: 'foo'})

    expect(elem).to.be.instanceof($)
    expect(elem[0].tagName).to.equal('DIV')
    expect(elem.html()).to.equal('')

  })

})

describe('div(opts)', () => {

  it('create jquery object of div with options', () => {

    const elem = div({addClass: 'foo', data: {'bar': 'baz'}})

    expect(elem.hasClass('foo')).to.be.true
    expect(elem.data('bar')).to.equal('baz')

  })

})

describe('div(opts, param0, [param1, ...])', () => {

  it('appends additional params to the element', () => {

    const elem = div({}, 'foo', div({addClass: 'bar'}, 'baz'), 'spam')

    expect(elem.html()).to.equal('foo<div class="bar">baz</div>spam')

  })

  it('can omits first param', () => {

    let elem = div('foo', div('bar'), 'baz')

    expect(elem.html()).to.equal('foo<div>bar</div>baz')

    elem = div('foo', [div('bar'), div('baz')])

    expect(elem.html()).to.equal('foo<div>bar</div><div>baz</div>')

  })

})

describe('domGen("x-tag")(opts, params, ...)', () => {

  it('creates the dom of custom tags', () => {

    const xTag = domGen('x-tag')

    const elem = xTag({addClass: 'foo'}, 'bar', div('baz'))

    expect(elem).to.be.instanceof($)
    expect(elem[0].tagName).to.equal('X-TAG')

  })

})
