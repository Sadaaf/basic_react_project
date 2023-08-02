import React from 'react'
import './profile.style.css'

class Profile extends React.Component{
    render(){
        return <div className='Container'>
            <div className='Bio'>
                <h3>Sadaf Al Arabi</h3>
                <p>Fullstack developer, Software Engineer, Gamer</p>
            </div>
            <div className='Skills'>
                <h3>Skills</h3>
                <ul>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className='Links'>
                <h3>Social Links</h3>
                <ul>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <a href="#">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default Profile