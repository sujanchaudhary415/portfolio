import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profileimage.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Sujan Chaudhary Profile" />
        <h1> <span>I'm Sujan Chaudhary,</span> frontend developer based in India.</h1>
        <p>I’m a frontend developer from Bengaluru, India, seeking opportunities to apply my skills and contribute to innovative projects.</p>
        <div className="hero-action">
            <div className="hero-connect"> 
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                Connect With me
              </AnchorLink>
            </div>
            <div className="hero-resume">
              <a href="/resume.pdf" download="Sujan_Chaudhary_Resume.pdf" className="resume-link">
                My resume
              </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
