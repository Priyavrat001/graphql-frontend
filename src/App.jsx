import React, { lazy } from 'react'
import {Route, Routes} from "react-router-dom";
import Header from './components/Header.jsx';

// all the pages
const Homepage = lazy(()=>import("./pages/Homepage.jsx"))
const Loginpage = lazy(()=>import("./pages/Loginpage.jsx"))
const SignUpPage = lazy(()=>import("./pages/SignUpPage.jsx"))
const Transactionpage = lazy(()=>import("./pages/Transactionpage.jsx"))
const NotFoundPage = lazy(()=>import("./pages/NotFoundPage.jsx"))

const App = () => {
  const authUser = true;
  return (
    <>
      {authUser && <Header/>}
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/transaction/:id' element={<Transactionpage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </>
  )
}

export default App