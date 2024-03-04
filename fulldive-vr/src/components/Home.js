// React
import React from 'react';

// Styles
import styles from '../styles/styles.module.css';

export default function Home() {
    return (
        <main>
            <section>
                <div style={{justifyContent: 'center'}} className={styles.container}>
                    <div>
                        <h1>Discover the Experience of Fulldive Vr</h1>
                        <p>Journey to any universe you can imagine.</p>
                    </div>
                </div>
                
            </section>

            

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