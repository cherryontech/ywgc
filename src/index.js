import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import './index.css'
import Services from './components/Services'
import Lifecycle from './components/Lifecycle'
import BioMose from './components/BioMose'
import ServiceArea from './components/ServiceArea'
import Footer from './components/Footer'

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
      <div id='services-section'>
        <Services />
        <Lifecycle />
        <ServiceArea />
        <BioMose />
        <Footer />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
