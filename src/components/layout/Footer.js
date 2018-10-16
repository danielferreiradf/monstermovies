import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className="footer">
            <h1 className="footer__title">
                Developed by Daniel Ferreira - {date}
            </h1>
            <div className="footer__social">
                <a href="https://twitter.com/danieldankdf" target="blank">
                    <h1 className="footer__title-icon">
                        <i className="fa fa-twitter icon" />
                    </h1>
                </a>

                <a href="https://github.com/danielferreiradf" target="blank">
                    <h1 className="footer__title-icon">
                        <i className="fa fa-github icon" />
                    </h1>
                </a>
            </div>

        </div>
    )
}
export default Footer;