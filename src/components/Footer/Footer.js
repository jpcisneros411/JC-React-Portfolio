import React from 'react';
import "./footer.css"

const Footer = () => {
    return(
        <div className="main-footer">
        <div className ="container">
                <div className ="row">
                    {/*column1*/}
                    <div className ="col">
                        <h4>Thanks for Stopping By!</h4>
                        <ul className = "list-unstyled">
                            Made for and by Jason Cisneros | jpcisneros411@github.com | linkedin.com/cisnerosjason
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;