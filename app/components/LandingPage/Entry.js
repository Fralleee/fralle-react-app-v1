export default class Entry {
  constructor(el, observer) {
    this.DOM = { el }
    this.DOM.title = { word: this.DOM.el.querySelector('.section__text') }
    this.Btn = document.getElementById(`btn${this.DOM.title.word.innerText}`)
    observer.observe(this.DOM.el)
  }

  enter() {
    this.DOM.title.word.style.display = 'block'
    this.Btn.className = 'nav__item active'
  }

  exit() {
    this.DOM.title.word.style.display = 'none'
    this.Btn.className = 'nav__item'
  }
}
