import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/about_profile.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-paragraphs">
                        <p>I bring a strong foundation in backend development, machine learning, and firmware. Throughout my career, I have contributed my skills to various companies such as Ford.</p>
                        <p>My passion for technology and innovation is not only shown through my experiences but also through my dedication and enthusiasm with my projects.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Python</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>C</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>Linux</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>Git</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>HTML</p><hr style={{width: "60%"}} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{width: "50%"}} /></div>
                        <div className="about-skill"><p>React</p><hr style={{width: "50%"}} /></div>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div> */}
        </div>
    )
}

export default About
