import React from 'react';
import Navbar from '../../components/Navbar';
import Flight from './flight.jpg'
import './style.css'

function Contact() {
    return (
        <div>
            <Navbar />
            <div>
                <img src={Flight} alt="flight" className="flight" />
            </div>
        </div>
    )
}

export default Contact;