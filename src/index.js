import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import './index.css'
import Services from './components/Services'

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

  <div className='service-map'></div>
    <div className='flex flex-col p-16 bg-green-700'>
      <h1 className='text-center text-white'>Icons from &quot;Lawn Care&quot; collection, created by Berkah Icon, from <a className='underline' href='https://thenounproject.com/browse/collection-icon/lawn-care-163681/?p=1'>Noun Project</a> CC BY 3.0</h1>
    </div>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
