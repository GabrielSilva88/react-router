import React from 'react';
import './Model.css';

const About = () => {
    return (
        <div>
            <div className='wrapper'>
                <div className='modal'>
                    <div className='modal-content'>
                        <h3>I am Modal</h3>
                    </div>
                </div>
            </div>

            <div className='ui raised very padded text conteiner segment'
                style={{ marginTop: '80px' }}
            >
                <h3 className='ui header'>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </div>
        </div>
    )
}

export default About;