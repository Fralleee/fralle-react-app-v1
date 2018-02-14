import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import './CodeIcon.scss'

import azure from '../../../public/images/azure.svg'
import blender from '../../../public/images/blender.svg'
import css from '../../../public/images/css.svg'
import csharp from '../../../public/images/csharp.svg'
import javascript from '../../../public/images/javascript.svg'
import net from '../../../public/images/net.svg'
import node from '../../../public/images/node.svg'
import react from '../../../public/images/react.svg'
import redux from '../../../public/images/redux.svg'
import sql from '../../../public/images/sql.svg'
import unity from '../../../public/images/unity.svg'
import vs from '../../../public/images/vs2013.svg'
import vscode from '../../../public/images/vscode.svg'
import webpack from '../../../public/images/webpack.svg'

const images = {
  azure: { img: azure, uri: 'https://en.wikipedia.org/wiki/Microsoft_Azure' },
  blender: { img: blender, uri: 'https://www.blender.org/' },
  css: { img: css, uri: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets' },
  csharp: { img: csharp, uri: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' },
  javascript: { img: javascript, uri: 'https://en.wikipedia.org/wiki/JavaScript' },
  net: { img: net, uri: 'https://en.wikipedia.org/wiki/.NET_Framework' },
  node: { img: node, uri: 'https://en.wikipedia.org/wiki/Node.js' },
  react: { img: react, uri: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)' },
  redux: { img: redux, uri: 'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)' },
  sql: { img: sql, uri: 'https://en.wikipedia.org/wiki/SQL' },
  unity: { img: unity, uri: 'https://en.wikipedia.org/wiki/Unity_(game_engine)' },
  vs: { img: vs, uri: 'https://en.wikipedia.org/wiki/Microsoft_Visual_Studio' },
  vscode: { img: vscode, uri: 'https://en.wikipedia.org/wiki/Visual_Studio_Code' },
  webpack: { img: webpack, uri: 'https://en.wikipedia.org/wiki/Webpack' }
}

class CodeIcon extends Component {
  render() {
    const { style, className, code } = this.props
    return (
      <a href={images[code].uri} title={code}>
        <LazyLoad height={105}>
          <img className={className || ''} style={style} src={images[code].img} alt={`${code} logo`} />
        </LazyLoad>
      </a>
    )
  }
}

CodeIcon.propTypes = {
  code: PropTypes.string
}

export default CodeIcon
