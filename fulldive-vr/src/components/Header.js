import React from 'react';

export default function Header(props) {
    return (
        <>
            <h2>Header</h2>
            <button onClick={props.handleHome}>Home</button>
            <button onClick={props.handleAbout}>About</button>
            <button onClick={props.handleStore}>Store</button>
        </>
    )
}