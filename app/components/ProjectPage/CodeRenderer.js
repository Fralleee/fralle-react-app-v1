import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Lowlight from 'react-lowlight'

// https://github.com/isagalaev/highlight.js/tree/master/src/languages)
import js from 'highlight.js/lib/languages/javascript'
import cs from 'highlight.js/lib/languages/cs'

// Then register them with lowlight
Lowlight.registerLanguage('js', js)
Lowlight.registerLanguage('cs', cs)

class CodeRenderer extends PureComponent {
  render() {
    const { language, value, inline } = this.props
    return <Lowlight language={language || 'cs'} value={value} inline={inline} />
  }
}

CodeRenderer.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string,
  inline: PropTypes.bool
}

export default CodeRenderer
