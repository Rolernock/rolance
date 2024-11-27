import './App.css'
import { Routes, Route } from 'react-router'
import MainLayout from './components/MainLayout'
import NotFoundScreen from './screens/NotFoundScreen'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ServiceScreen from './screens/ServiceScreen'
import ContactScreen from './screens/ContactScren'
import ReadMessageScreen from './screens/ReadMessageScreen'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/services' element={<ServiceScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/msg' element={<ReadMessageScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Route>
    </Routes>
  )
}

export default App
