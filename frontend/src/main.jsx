import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, BrowserRouter, createBrowserRouter, createRoutesFromElements, Router, RouterProvider, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import AuthLayout from './components/auth/layout'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import { Toaster } from './components/ui/toaster'

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/auth" element={<AuthLayout/>}>
//     <Route  path='login' element={<Login/>}/>
//     <Route  path='register' element={<Register/>}/>
   
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(

   <BrowserRouter>
   <Provider store={store}> 
  <App/>
  <Toaster />
  </Provider>
  </BrowserRouter>
 
)
