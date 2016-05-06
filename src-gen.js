#!/usr/bin/env node
const tags = require('html-tags')

console.log(`/**
 * Returns a generator of the doms of the given tag name.
 * @param {string} tagName The tag name of the dom to create
 * @return {Function}
 */
export default function domGen(tagName) {

  /**
   * Generates a dom with the given params.
   * @param {object} [opts] The options to pass as the second arg of $('<tag/>', arg)
   * @param {object[]} args The objects to append to the element
   * @return {jQuery}
   */
  return (opts, ...args) => {
    if (!seemLikePlainObject(opts)) {
      args.unshift(opts)
      opts = undefined
    }

    return $('<' + tagName + '/>', opts).append(...[].concat(...args))
  }
}

/**
 * Checkes if the object is plain.
 * @param {object} o The object
 * @return {boolean}
 */
function seemLikePlainObject(o) {
  return o instanceof Object && Object.getPrototypeOf(o).hasOwnProperty('isPrototypeOf')
}`)

tags.filter(tag => tag !== 'var').forEach(tag => console.log(`export const ${ tag } = domGen('${ tag }')`))
