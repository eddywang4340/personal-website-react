import React, { useState } from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.png'
import projects_data from '../../assets/projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
        {isOpen ? (
            <div className="popup-project">
                <span onClick={()=> setOpen(false)}>&times;</span>
                <div className="popup"></div>
            </div>
        ) : (
            <div id='projects' className='projects'>
                <div className="projects-title">
                    <h1>Projects</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="projects-container">
                    {projects_data.map((work, index)=>{
                        return <img key={index} src={work.w_img} alt="" onClick={()=> setOpen(true)}/>
                    })}
                </div>
                <div className="projects-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        )};
    </>
    )
}

export default Projects
