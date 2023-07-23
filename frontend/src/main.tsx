import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Store from './Redux/Store.tsx'
import { Provider } from 'react-redux'
import "./output.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <App />
  </Provider>,
)
