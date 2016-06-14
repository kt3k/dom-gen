'use strict'

module.exports = domGen

/**
 * Returns a generator of the doms of the given tag name.
 * @param {string} tagName The tag name of the dom to create
 * @return {Function}
 */
function domGen(tagName) {

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
domGen.a = domGen('a')
domGen.abbr = domGen('abbr')
domGen.address = domGen('address')
domGen.area = domGen('area')
domGen.article = domGen('article')
domGen.aside = domGen('aside')
domGen.audio = domGen('audio')
domGen.b = domGen('b')
domGen.base = domGen('base')
domGen.bdi = domGen('bdi')
domGen.bdo = domGen('bdo')
domGen.blockquote = domGen('blockquote')
domGen.body = domGen('body')
domGen.br = domGen('br')
domGen.button = domGen('button')
domGen.canvas = domGen('canvas')
domGen.caption = domGen('caption')
domGen.cite = domGen('cite')
domGen.code = domGen('code')
domGen.col = domGen('col')
domGen.colgroup = domGen('colgroup')
domGen.data = domGen('data')
domGen.datalist = domGen('datalist')
domGen.dd = domGen('dd')
domGen.del = domGen('del')
domGen.details = domGen('details')
domGen.dfn = domGen('dfn')
domGen.dialog = domGen('dialog')
domGen.div = domGen('div')
domGen.dl = domGen('dl')
domGen.dt = domGen('dt')
domGen.em = domGen('em')
domGen.embed = domGen('embed')
domGen.fieldset = domGen('fieldset')
domGen.figcaption = domGen('figcaption')
domGen.figure = domGen('figure')
domGen.footer = domGen('footer')
domGen.form = domGen('form')
domGen.h1 = domGen('h1')
domGen.h2 = domGen('h2')
domGen.h3 = domGen('h3')
domGen.h4 = domGen('h4')
domGen.h5 = domGen('h5')
domGen.h6 = domGen('h6')
domGen.head = domGen('head')
domGen.header = domGen('header')
domGen.hr = domGen('hr')
domGen.html = domGen('html')
domGen.i = domGen('i')
domGen.iframe = domGen('iframe')
domGen.img = domGen('img')
domGen.input = domGen('input')
domGen.ins = domGen('ins')
domGen.kbd = domGen('kbd')
domGen.keygen = domGen('keygen')
domGen.label = domGen('label')
domGen.legend = domGen('legend')
domGen.li = domGen('li')
domGen.link = domGen('link')
domGen.main = domGen('main')
domGen.map = domGen('map')
domGen.mark = domGen('mark')
domGen.math = domGen('math')
domGen.menu = domGen('menu')
domGen.menuitem = domGen('menuitem')
domGen.meta = domGen('meta')
domGen.meter = domGen('meter')
domGen.nav = domGen('nav')
domGen.noscript = domGen('noscript')
domGen.object = domGen('object')
domGen.ol = domGen('ol')
domGen.optgroup = domGen('optgroup')
domGen.option = domGen('option')
domGen.output = domGen('output')
domGen.p = domGen('p')
domGen.param = domGen('param')
domGen.picture = domGen('picture')
domGen.pre = domGen('pre')
domGen.progress = domGen('progress')
domGen.q = domGen('q')
domGen.rb = domGen('rb')
domGen.rp = domGen('rp')
domGen.rt = domGen('rt')
domGen.rtc = domGen('rtc')
domGen.ruby = domGen('ruby')
domGen.s = domGen('s')
domGen.samp = domGen('samp')
domGen.script = domGen('script')
domGen.section = domGen('section')
domGen.select = domGen('select')
domGen.small = domGen('small')
domGen.source = domGen('source')
domGen.span = domGen('span')
domGen.strong = domGen('strong')
domGen.style = domGen('style')
domGen.sub = domGen('sub')
domGen.summary = domGen('summary')
domGen.sup = domGen('sup')
domGen.svg = domGen('svg')
domGen.table = domGen('table')
domGen.tbody = domGen('tbody')
domGen.td = domGen('td')
domGen.template = domGen('template')
domGen.textarea = domGen('textarea')
domGen.tfoot = domGen('tfoot')
domGen.th = domGen('th')
domGen.thead = domGen('thead')
domGen.time = domGen('time')
domGen.title = domGen('title')
domGen.tr = domGen('tr')
domGen.track = domGen('track')
domGen.u = domGen('u')
domGen.ul = domGen('ul')
domGen.var = domGen('var')
domGen.video = domGen('video')
domGen.wbr = domGen('wbr')
