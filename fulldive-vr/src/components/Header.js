// React
import React from 'react';

// Styles
import style from '../styles/styles.module.css';

export default function Header(props) {
    return (
        
        <header className={style.headerContainer}>
            <div className={style.block}>
                <h2>Header</h2>
            </div>
            
            <div className={style.block}>
                <nav>
                    <button onClick={props.handleHome}>Home</button>
                    <button onClick={props.handleAbout}>About</button>
                    <button onClick={props.handleStore}>Store</button>
                </nav>
            </div>
            
        </header>
            
        
    )
}