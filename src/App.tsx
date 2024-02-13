import './App.css'
import Bottom_Navigation from './Menu/Menu'
import { store } from './Store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
      <Bottom_Navigation/>
    </Provider>
    </>
  )
}

export default App
