// React
import React from 'react';

// Styles
import style from '../styles/styles.module.css';

export default function Header(props) {
    return (
        <header className={style.headerGrid}>
            <div className={style.headText}>
                <h2>Fulldive VR</h2>
            </div>
            
            <div className={style.headNav}>
                <div>
                    <nav>
                        <button onClick={props.handleHome}>Home</button>
                        <button onClick={props.handleAbout}>About</button>
                        <button onClick={props.handleStore}>Store</button>
                        <button className={style.btnPrimary}>Sign Up</button>
                    </nav>
                </div>
            </div>
            
        </header>
    )
}