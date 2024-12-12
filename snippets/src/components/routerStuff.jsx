import { Link, Route, Routes } from 'react-router-dom'
import './style.css'
import Form from './components/Form'
import ApiStuff from './components/fetching';

function Router() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/fetch">ApiCall</Link></li>
        </ul>
      </nav>

      <Routes>
          <Route path='/' element={ <h1>Home</h1> }/>
          <Route path='/form' element={<Form />} />
          <Route path='/fetch' element={<ApiStuff />} />
      </Routes>
    </>
  )
}

export default Router