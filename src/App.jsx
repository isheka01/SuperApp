import RegPage from './pages/RegPage'
import {Route,Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
   <div>
    <Routes>
    <Route  path="/" element={<RegPage/>}/>
    {/*<Route  path="categories" element={<CategoriessPage/>}/>
*/}
    </Routes>
  </div>
  
  )
}

export default App