import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li>contact</li>
                <li>gallery</li>
            </ul>
        </>
    )
}
