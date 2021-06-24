import React from 'react';

const divStyle = {

    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: '#212529'
}

const Footer = () => {
    return (

        <footer class="footer" style={divStyle}>
            <div class="container">
                <span class="text-muted">Created by Michael O'Connor. © 2021</span>
            </div>
        </footer>

    )
}

export default Footer