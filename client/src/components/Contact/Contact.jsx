import React from 'react'
import "./Contact.scss"

export const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type="text" placeholder="Enter your e-mail..." />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    FB
                    Insta
                    twi
                    goo
                    pin
                </div>
            </div>
        </div>
    )
}
