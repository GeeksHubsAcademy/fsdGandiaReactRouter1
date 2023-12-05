
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Register } from '../Register/Register'
import { Profile } from '../Profile/Profile'
import { Login } from '../Login/Login'
import { Films } from '../Films/Films'
import { Idiomas } from '../Idiomas/Idiomas'

export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"}/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/films" element={<Films />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile />}/>
                <Route path="/idiomas" element={<Idiomas />}/>
            </Routes>
        </>
    )
}