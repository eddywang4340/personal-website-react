import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Edward Wang,</span> a CS student based in Canada.</h1>
            <p>Welcome to my personal website! I am a second-year student at University of Waterloo currently looking for open internships. On my site, you'll discover my skills, projects, and contact information. </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <a href="/resume.pdf" download='resume.pdf' className='hero-resume'>Get resume</a>
                {/* <div className="hero-resume">Get resume</div> */}
            </div>
        </div>
    )
}

export default Hero

