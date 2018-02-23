import 'styles/style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

import App from 'components/App'

ReactGA.initialize('UA-46722568-1')

function render() {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )
}
render()

if (module.hot) module.hot.accept('components/App', () => render())
