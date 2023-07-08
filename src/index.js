import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import './index.css'
import Services from './components/Services'
import ServiceArea from './components/ServiceArea'

export default function App () {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Services />
      <ServiceArea />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
