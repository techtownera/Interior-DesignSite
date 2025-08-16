import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Projects from  './components/Projects'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Home/>
      <Service/>
      <Projects/>
      <Contact/>
      </div>
  },

  {
    path:'/service',
    element: <div>
      <Navbar/>
      <Service/>
    </div>

  },
  {
    path: '/projects',
    element: <div>
      <Navbar/>
      <Projects/>
    </div>
  },

  {
    path: '/contact',
    element: <div>
      <Navbar/>
      <Contact/>
    </div>
  }
]);

function App() {
  

  return (
    <>

    {/* <Home/> */}
  

      <RouterProvider router={router}/>

   
    

   </>
  )
}

export default App
