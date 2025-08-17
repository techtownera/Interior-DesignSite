import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Projects from  './components/Projects'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Footer from './components/footer'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
     <Navbar/>
      <Home/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
  },

  {
    path:'/service',
    element: <div>
      <Navbar/>
      <Service/>
      <Footer/>
    </div>

  },
  {
    path: '/projects',
    element: <div>
      <Navbar/>
      <Projects/>
      <Footer/>
    </div>
  },

  {
    path: '/contact',
    element: <div>
      <Navbar/>
      <Contact/>
      <Footer/>
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
