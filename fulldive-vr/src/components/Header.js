// React
import React from 'react';

// Styles
import styles from '../styles/styles.module.css';

export default function Header(props) {
    return (
        <header className={styles.headerGrid}>
            <div className={styles.headText}>
                <h2>Fulldive VR</h2>
            </div>
            
            <div className={styles.headNav}>
                <div>
                    <nav>
                        <button className={styles.btnSecondary} onClick={props.handleHome}>Home</button>
                        <button className={styles.btnSecondary} onClick={props.handleAbout}>About</button>
                        <button className={styles.btnSecondary} onClick={props.handleStore}>Store</button>
                        <button className={styles.btnPrimary} onClick={props.handleSignIn}>Sign Up</button>
                    </nav>
                </div>
            </div>
            
        </header>
    )
}