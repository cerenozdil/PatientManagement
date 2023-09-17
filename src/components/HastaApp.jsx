import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListHastaComponent from './ListHastaComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import HastaComponent from './HastaComponent'

import './Hasta.css'

export default function HastaApp() {
    return (
        <div className="HastaApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={ <LoginComponent /> } />
                    <Route path='/login' element={ <LoginComponent /> } />
                    <Route path='/welcome/:username' element={<WelcomeComponent /> } />
                    <Route path='/hasta' element={<ListHastaComponent /> } />
                    <Route path='/logout' element={<LogoutComponent /> } />
                    <Route path='/hasta/:id' element={<HastaComponent /> } />


                </Routes>
            </BrowserRouter>
        </div>
    )
}