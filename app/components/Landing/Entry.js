export default class Entry {
  constructor(el, observer) {
    this.DOM = { el }
    this.DOM.title = { word: this.DOM.el.querySelector('.content__text') }
    observer.observe(this.DOM.el)
  }

  enter() {
    this.DOM.title.word.style.display = 'block'
  }

  exit() {
    this.DOM.title.word.style.display = 'none'
  }
}
