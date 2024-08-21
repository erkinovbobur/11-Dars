
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import("./routes/Home"))
const Single = lazy(() => import("./routes/Single"))

function App() {



 

  return (
    <>
<Routes>
<Route path="/" element={<Suspense  fallback="Loading..."><Home/></Suspense>}/>
<Route path="/Single" element={<Suspense fallback="Loading..."><Single/></Suspense>}/>
</Routes>
    </>
  )
}

export default App
 