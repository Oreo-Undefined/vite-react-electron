import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Loading from './component/Loading'
import App from './Routes'
import { Provider, store } from 'module'
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider value={store}>
    <Suspense fallback={<Loading />}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)