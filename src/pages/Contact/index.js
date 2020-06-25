import React from 'react';
import Navbar from '../../components/Navbar';
import Flight from './flight.jpg'
import './style.css'
import Footer from '../../components/Footer'

function Contact() {
    return (
        <div>
            <Navbar />
            <div>
                <img src={Flight} alt="flight" className="flight" />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;