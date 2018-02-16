import React, { Component } from 'react'
import ScrollIndicator from 'shared/ScrollIndicator/ScrollIndicator'
import LogoText from 'public/images/logo/logo-text.svg'
import './intro.scss'

class Intro extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    // window.requestAnimationFrame(() => {
    //   const doc = document.documentElement
    //   const intro = document.getElementById('intro')
    //   const scroll = document.getElementById('scroll')
    //   const title = document.getElementById('landingTitle')
    //   const top = doc.clientTop || 0
    //   const offsetTop = window.pageYOffset || doc.scrollTop
    //   const topDist = offsetTop - top
    //   const scrollView = topDist / window.innerHeight
    //   if (scrollView <= 1) {
    //     const translateY = Math.round(-topDist / 5)
    //     const opacity = Math.floor((1 - scrollView) * 100) / 100
    //     intro.style.transform = `translate3d(0, ${translateY}px, 0)`
    //     title.style.transform = `translate3d(0, ${translateY}px, 0)`
    //     intro.style.display = 'flex'
    //     intro.style.opacity = opacity
    //     scroll.style.opacity = Math.max(opacity - 0.6, 0)
    //   } else {
    //     intro.style.display = 'none'
    //     intro.style.opacity = 0
    //     scroll.style.opacity = 0
    //   }
    // })
  }

  render() {
    return (
      <section className='intro'>
        <h1 className='xxl'>heading XXL</h1>
        <h1 className='xl'>Heading XL</h1>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
          ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
        <ScrollIndicator />
      </section>
    )
  }
}

export default Intro
