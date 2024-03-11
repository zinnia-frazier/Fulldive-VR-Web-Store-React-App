// React
import React from 'react';

// Styles
import style from '../styles/styles.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={style.container}>
                <div className={style.block}>
                    <h3>Company Info</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Store</li>
                    </ul>
                </div>

                <div className={style.block}>
                    <h3>Customer Support</h3>
                    <ul>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className={style.block}>
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>YouTube</li>
                        <li>Pinterest</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}