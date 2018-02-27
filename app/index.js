import 'styles/style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import configureStore from 'store/configureStore'
import App from 'containers/App'

ReactGA.initialize('UA-46722568-1')
const store = configureStore()

function render() {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}
render()

if (module.hot) module.hot.accept('components/App', () => render())
