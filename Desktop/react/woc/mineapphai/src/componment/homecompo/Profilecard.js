import React from 'react'
import { Button } from 'react-bootstrap'
import './profile.css'
export default function Profilecard() {
        return (
                <div className='main'>
                        <div className="upper-container">
                                <div className="image-container">
                                        <img src="https://source.unsplash.com/1024x400/?italy" alt="" height='100px' width='100px' />
                                </div>
                        </div>
                        <div className="lower-container">
                                <h3>RamPal</h3>
                                                     
                                <Button> Invite your Friends </Button>
                                <div className="social">
                                <i className='fa fa-facebook'></i>
                                <i className='fa fa-instagram'></i>
                                <i className='fa fa-twitter'></i>
                                </div>
                        </div>

                </div>
        )
}
