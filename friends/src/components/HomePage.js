import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
    return (
        <div className="App-wrapper">
            <p> Hello World </p>
            <Link
                to='/login'
                className="logIn">
                Log In
            </Link>
        </div>
    )
}

export default HomePage 