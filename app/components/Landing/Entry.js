export default class Entry {
  constructor(el, observer) {
    this.DOM = { el }
    // this.DOM.image = this.DOM.el.querySelector('.content__img')
    this.DOM.title = { word: this.DOM.el.querySelector('.content__text') }
    observer.observe(this.DOM.el)
  }

  enter(direction = 'down') {
    this.DOM.title.word.style.opacity = 1
  }

  exit(direction = 'down') {
    this.DOM.title.word.style.opacity = 0
  }
}
