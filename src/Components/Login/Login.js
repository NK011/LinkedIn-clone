import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth } from '../../firebase'
import './Login.css'

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imaageUrl, setImageUrl] = useState('')
    const dispatch = useDispatch()

    const userLogin = e => {
        e.preventDefault()

        if(!name){
            alert("Please enter Your Username")
        }

        auth.signInWithEmailAndPassword(email, password).then( (userAuth) => {
            dispatch(
                login(
                    {
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.name,
                        profileURL: userAuth.user.photoUrl
                    }
                )
            )
        })
    }

    const userRegister = e => {
        e.preventDefault()

        if(!name){
            alert("Please enter Your Username")
        }

        auth.createUserWithEmailAndPassword(email, password).then( (userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: imaageUrl
            }).then( () => {
                dispatch( 
                    login(
                        {
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: userAuth.user.name,
                            photoURL: userAuth.user.photoURL
                        }
                    )
                )
            })
        } )
    }

    return (
        <div className="login">
            <img src="https://th.bing.com/th/id/OIP.bQGKYWet4s6mEkmhkvOAgQHaFj?w=251&h=188&c=7&o=5&dpr=1.25&pid=1.7" alt="user" />
            <form>
                <input type="text" required value={name} onChange={ e => setName(e.target.value) } placeholder="Enter Username"/>
                <input type="text" onChange={ e=> setImageUrl(e.target.value)} placeholder="Enter Image URL (optional)"/>
                <input type="email" required value={email} onChange={ e => setEmail(e.target.value)} placeholder="Enter Your Email"/>
                <input type="password" required value={password} onChange={ e => setPassword(e.target.value) } placeholder="Enter Password"/>
                <button type="submit" onClick={userLogin} >Login</button>
                <p> Not a member? <span onClick={userRegister}> Register Now </span> </p>
            </form>
        </div>
    )
}

export default Login
