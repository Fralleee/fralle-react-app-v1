import React, { Component } from 'react'
import Flickity from 'flickity'
import 'ProjectPage/project.scss'
import 'ProjectPage/flickity.scss'
import 'ProjectPage/markdown.scss'
import ReactMarkdown from 'react-markdown'
import MarkdownExample from './test.md'

const images = ['bajs', 'plutt', 'körv', 'penis', 'mcdragans']

class ProjectPage extends Component {
  componentDidMount() {
    const carousel = document.querySelector('.carousel')
    // eslint-disable-next-line
    const flkty = new Flickity(carousel, {
      imagesLoaded: true,
      wrapAround: true,
      lazyLoad: true,
      autoPlay: 10000,
      adaptiveHeight: false
    })
  }

  render() {
    return (
      <div className='project'>
        <h1 className='section__text'>Intro</h1>
        <div className='carousel'>
          {images.map(image => (
            <div key={image} className='carousel-cell'>
              <img
                srcSet='
            https://placeimg.com/480/480/any 480w,
            https://placeimg.com/960/720/any 960w,
            https://placeimg.com/1366/768/any 1366w,
            https://placeimg.com/1920/768/any 1920w'
                sizes='(max-width: 480w) 440px,
            (max-width: 960w) 960px,
            (max-width: 1366w) 1366px,
            1920px'
                src='https://placeimg.com/1920/768/any'
                alt={image}
                data-flickity-lazyload='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
              />
            </div>
          ))}
        </div>
        <h1>Project</h1>
        <ReactMarkdown className='markdown-body' source={MarkdownExample} escapeHtml={false} />
      </div>
    )
  }
}

export default ProjectPage
