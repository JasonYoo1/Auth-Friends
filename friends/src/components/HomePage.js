import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
    return (
        <div>
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