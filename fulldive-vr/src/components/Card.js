// React
import React from 'react';

// Styles
import styles from '../styles/styles.module.css';

export default function Card(props) {
    return (
        <div className={styles.card}>
            <img src={props.imageSrc} alt='placeholder' />
            <h3>{props.itemName}</h3>
            <button className={styles.btnPrimary}>Shop</button>
        </div>
    )
}