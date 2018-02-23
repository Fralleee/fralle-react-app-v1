export default class SectionText {
  constructor(el, observer) {
    this.DOM = { el }
    this.DOM.title = this.DOM.el.querySelector('.section__text')
    this.Btn = document.getElementById(`btn${this.DOM.title.innerText}`)
    observer.observe(this.DOM.el)
  }

  enter() {
    this.DOM.title.style.display = 'block'
    this.Btn.className = 'nav__item active'
  }

  exit() {
    this.DOM.title.style.display = 'none'
    this.Btn.className = 'nav__item'
  }
}
