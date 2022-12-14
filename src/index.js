import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import './index.css'

export default function App () {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='services' element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
