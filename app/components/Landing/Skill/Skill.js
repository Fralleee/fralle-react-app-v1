import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './skill.scss'

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
  azure: { label: 'Azure', img: azure, uri: 'https://en.wikipedia.org/wiki/Microsoft_Azure' },
  blender: { label: 'Blender', img: blender, uri: 'https://www.blender.org/' },
  css: { label: 'CSS', img: css, uri: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets' },
  csharp: { label: 'C#', img: csharp, uri: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' },
  javascript: { label: 'Javscript', img: javascript, uri: 'https://en.wikipedia.org/wiki/JavaScript' },
  net: { label: '.Net', img: net, uri: 'https://en.wikipedia.org/wiki/.NET_Framework' },
  node: { label: 'Node', img: node, uri: 'https://en.wikipedia.org/wiki/Node.js' },
  react: { label: 'React', img: react, uri: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)' },
  redux: { label: 'Redux', img: redux, uri: 'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)' },
  sql: { label: 'SQL', img: sql, uri: 'https://en.wikipedia.org/wiki/SQL' },
  unity: { label: 'Unity', img: unity, uri: 'https://en.wikipedia.org/wiki/Unity_(game_engine)' },
  vs: { label: 'VS', img: vs, uri: 'https://en.wikipedia.org/wiki/Microsoft_Visual_Studio' },
  vscode: { label: 'VS Code', img: vscode, uri: 'https://en.wikipedia.org/wiki/Visual_Studio_Code' },
  webpack: { label: 'Webpack', img: webpack, uri: 'https://en.wikipedia.org/wiki/Webpack' }
}

class Skill extends Component {
  render() {
    const { style, code } = this.props
    return (
      <li className='skill' style={style}>
        <a href={images[code].uri}>
          <img src={images[code].img} alt={`${code} logo`} />
          <span>{images[code].label}</span>
        </a>
      </li>
    )
  }
}

Skill.propTypes = {
  code: PropTypes.string
}

export default Skill
