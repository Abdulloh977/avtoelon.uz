import './App.css'
import { Route, Routes } from 'react-router-dom'
import Logen from './pages/Login/login'
import Signup from './pages/Login/singup'
import Home from './pages/home/home'
import { useLoginContext } from './context/loginContaxt'
import { About } from './pages/About/about'
import CategoryList from './pages/categoryList/categoryList'
import SingleCar from './pages/carbuy/carbuy'


function App() {
  const {user} = useLoginContext()

  return (
    <Routes>
      <Route path="/" element={user ? <Home/> : <Signup/>} />
      <Route path='/login' element={<Logen/>} />
      <Route path='/signup' element={<Signup />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/category/:id' element={<CategoryList />} />
      <Route path="/car/:id" element={<SingleCar />} />
    </Routes>
  )

}

export default App;
