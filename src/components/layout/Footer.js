import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className="footer">
            <h1 className="footer__title">Developed By Daniel Ferreira. {date}</h1>
        </div>
    )
}
export default Footer;