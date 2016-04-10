/**
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
}

export const div = domGen('div')
export const span = domGen('span')
export const p = domGen('p')

export const h1 = domGen('h1')
export const h2 = domGen('h2')
export const h3 = domGen('h3')
export const h4 = domGen('h4')
export const h5 = domGen('h5')
export const h6 = domGen('h6')

export const form = domGen('form')
export const input = domGen('input')
export const label = domGen('label')
export const textarea = domGen('textarea')
export const select = domGen('select')
export const option = domGen('option')

export const hr = domGen('hr')
export const br = domGen('br')

export const ul = domGen('ul')
export const ol = domGen('ol')
export const li = domGen('li')

export const small = domGen('small')
export const big = domGen('big')
export const strong = domGen('strong')
export const i = domGen('i')
export const b = domGen('b')
export const s = domGen('s')
export const address = domGen('address')
export const sub = domGen('sub')
export const sup = domGen('sup')

export const table = domGen('table')
export const tr = domGen('tr')
export const th = domGen('th')
export const td = domGen('td')

export const dl = domGen('dl')
export const dt = domGen('dt')
export const dd = domGen('dd')

export const main = domGen('main')
export const header = domGen('header')
export const nav = domGen('nav')
export const aside = domGen('aside')
export const article = domGen('article')
export const footer = domGen('footer')
