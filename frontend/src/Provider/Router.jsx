import React from 'react'
import UserContextProvider from './loginContext'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ProtectedRouting from './ProtectedRouting'
import LoginPage from '../Components/Login'
import SignUp from '../Components/Signup'
import Home from '../Components/Home'
import Project from '../Components/Project'
import Task from '../Components/Task'


function Router() {
  return (
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route element = {<ProtectedRouting/>}>
                  <Route path='/'element = {<Home/>}/>
                  <Route path='/project/:id' element = {<Project/>}/>
                  <Route path='/task/:id' element = {<Task/>}/>
                </Route>
                <Route path='/login' element = {<LoginPage/>}/>
                <Route path='/signup' element = {<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
  )
}

export default Router
