// React
import React from 'react';

// Image
import placeholder from '../images/placeholder.webp';

// Styles
import styles from '../styles/styles.module.css';

import Card from './Card';

export default function Home(props) {
    return (
        <main>
            <section>
                <div style={{justifyContent: 'center'}} className={styles.container}>
                    <div>
                        <h1>Discover the Experience of Fulldive Virtual Reality</h1>
                        <p>Journey to any universe you can imagine.</p>

                        <div className={styles.container}>
                            <button className={styles.btnPrimary} onClick={props.handleStore}>Shop</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.container}>
                    <div className={styles.block}>
                        <img src={placeholder} alt='placeholder' />
                    </div>

                    <div className={styles.block}>
                        <h2>Innovative Experience</h2>

                        <p>Dive into a never before felt experience from anywhere.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.container}>
                    <div className={styles.block}>
                        <h2>Explore Worlds</h2>

                        <p>Immerse yourself in any world you desire.</p>
                    </div>

                    <div className={styles.block}>
                        <img src={placeholder} alt='placeholder' />
                    </div>
                </div>
            </section>
            
            <section>
                <div className={styles.container}>
                    <h2 style={{justifyContent: 'center'}}>A Set for Everyone</h2>
                </div>

                <div className={styles.container}>
                    <Card imageSrc={placeholder} itemName='Pink' handleStore={props.handleStore} />

                    <Card imageSrc={placeholder} itemName='Black' handleStore={props.handleStore} />

                    <Card imageSrc={placeholder} itemName='Blue' handleStore={props.handleStore} />

                    <Card imageSrc={placeholder} itemName='Orange' handleStore={props.handleStore} />

                    <Card imageSrc={placeholder} itemName='Green' handleStore={props.handleStore} />
                </div>
            </section>
            
        </main>
    )
}