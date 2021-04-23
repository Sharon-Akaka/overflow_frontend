import React from 'react';
import './components.css'


export default function Navbar() {
    return <div className='navbar'>
        <h1 className='app_logo'>OVERFLOW</h1>
        <ul>
            <li><a href="Academic Year">Academic Year</a></li>
            <li><a href="Industry">Industry</a></li>
            <li><a href="Summer Schools">Summer Schools</a></li>
            <li><a href="Submit an Opportunity">Submit an Opportunity!</a></li>
        </ul>
    </div>
}