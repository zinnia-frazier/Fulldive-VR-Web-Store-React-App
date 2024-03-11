// React
import React from 'react';

// Styles
import style from '../styles/styles.module.css';

export default function SignIn() {
    return (
        <main>
            <div className={style.container}>
                <div className={style.block}>
                    <h1>Sign In</h1>

                    <p>If you have an account, please sign in.</p>

                    <form>
                        <input className={style.field} type='text' id='name' placeholder='Name' />
                        <input className={style.field} type='email' id='email' placeholder='Email' />
                        <input className={style.field} type='password' id='password' placeholder='Password' />

                        <input type='submit' className={style.btnPrimary} value='Sign In' />
                    </form>

                    <p>Don't have an account, continue as a guest.</p>
                </div>
            </div>
            
        </main>
    )
}