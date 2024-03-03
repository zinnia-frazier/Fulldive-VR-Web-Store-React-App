// React
import React from 'react';

// Styles
import style from '../styles/styles.module.css';

export default function Header(props) {
    return (
        
        <header>
            <h2>Header</h2>

            <nav>
                <button onClick={props.handleHome}>Home</button>
                <button onClick={props.handleAbout}>About</button>
                <button onClick={props.handleStore}>Store</button>
            </nav>
        </header>
            
        
    )
}