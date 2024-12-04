import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>All</h1>}/>
        <Route path='/counter' element={<h1>Counter</h1>}/>
        <Route path='/home' element={<h1>Home</h1>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </>
  )
}

export default App
