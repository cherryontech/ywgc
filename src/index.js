import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Services from './pages/Services'
import './index.css'
import Services from './components/Services'

export default function App () {
  return (
    <div className='wrapper'>
    <div className='background-image'>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='services' element={<Services />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  </div>
  <div className=''>
    <Services/>
  </div>
  <div className='service-map'></div>
  <div className='flex flex-col bg-green-700 p-16'>
    <h1 className='text-center text-white'>Icons from &quot;Lawn Care&quot; collection, created by Berkah Icon, from <a className='underline' href='https://thenounproject.com/browse/collection-icon/lawn-care-163681/?p=1'>Noun Project</a> CC BY 3.0</h1>
  </div>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
