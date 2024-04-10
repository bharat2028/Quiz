import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignInSide from '../Login/SignInSide'
import SignUp from '../SignUp/Signup'
import Dashboard from '../Dashboard/Dashboard'
import ButtonBaseDemo from '../Learn/Learn'
import App from '../QUIZ/App'
import Cpp from '../QUIZ2/cpp'
import Java from '../QUIZ3/java'
import Pythoncourse from '../Learn/Pythoncourse'
import Javacourse from '../Learn/Javacourse'
import Cppcourse from '../Learn/Cppcourse'
import Contest from '../../Contest/Contest'
import Notes from '../Learn/Notes'
const Navigate = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignInSide/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Learn' element={<ButtonBaseDemo />}/>
      <Route path='/App' element={< App/>}/>
      <Route path='/cpp' element={<Cpp/>}/>
      <Route path='/Java' element={<Java/>}/>
      <Route path='/Pythoncourse' element={<Pythoncourse/>}/>
      <Route path='/Javacourse' element={<Javacourse />}/>
      <Route path='/Cppcourse' element={<Cppcourse />}/>
      <Route path='/Contest' element={<Contest />}/>
      <Route path='/Notes' element={<Notes />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Navigate