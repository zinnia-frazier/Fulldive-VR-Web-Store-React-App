// React
import React from 'react';

// Styles
import styles from '../styles/styles.module.css';

export default function Home() {
    return (
        <main>
            <h1>Home</h1>

            <p>This is the home page in a main tag</p>

            <div className={styles.container}>
                <p>Some text</p>

                <hr />

                <p>Some more text</p>

                <hr />

                <p>Even more text</p>
            </div>
        </main>
    )
}