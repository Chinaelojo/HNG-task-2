import { Routes, Route } from 'react-router-dom'
import './App.css';
import Main from './component/Main'
import Contact from './component/Contact'



function App() {
  return (
    <div>
      <Routes>
           <Route path='/' element= {<Main />} />
           <Route path='/contact' element= {<Contact />} />
  
      </Routes>
      
    </div>
  )
}

export default App




