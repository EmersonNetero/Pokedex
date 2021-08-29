import React from 'react'

import './style.css';


function Header({children}) {
    return (
        <header className="header-container">
            <h2>
                {children}
            </h2>
        </header>
    )
}

export default Header