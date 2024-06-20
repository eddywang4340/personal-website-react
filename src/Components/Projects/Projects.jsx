import React, { useState } from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.png'
import projects_data from '../../assets/projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {

    const [isOpen1, setOpen1] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
    const [isOpen3, setOpen3] = useState(false);
    const [isOpen4, setOpen4] = useState(false);
    const [isOpen5, setOpen5] = useState(false);
    const [isOpen6, setOpen6] = useState(false);

    return (
        <>
        {isOpen1 ? (
            <div className="popup-project">
                <span onClick={()=> setOpen1(false)}>&times;</span>
                <div className="popup">
                    <h>{projects_data[0].w_name}</h>
                    <p>{projects_data[0].w_description}</p>
                </div>
            </div>
        ) : isOpen2 ? (
            <div className="popup-project">
                <span onClick={()=> setOpen2(false)}>&times;</span>
                <div className="popup">
                    <h>{projects_data[1].w_name}</h>
                    <p>{projects_data[1].w_description}</p>
                </div>
            </div>
        ) : isOpen3 ? (
            <div className="popup-project">
                <span onClick={()=> setOpen3(false)}>&times;</span>
                <div className="popup">
                    <h>{projects_data[2].w_name}</h>
                    <p>{projects_data[2].w_description}</p>
                </div>
            </div>
        ) : isOpen4 ? (
            <div className="popup-project">
                <span onClick={()=> setOpen4(false)}>&times;</span>
                <div className="popup">
                    <h>{projects_data[3].w_name}</h>
                    <p>{projects_data[3].w_description}</p>
                </div>
            </div>
        ) : isOpen5 ? (
            <div className="popup-project">
                <span onClick={()=> setOpen5(false)}>&times;</span>
                <div className="popup">
                    <h>{projects_data[4].w_name}</h>
                    <p>{projects_data[4].w_description}</p>
                </div>
            </div>
        ) : isOpen6 ? (
            <div className="popup-project">
                <span onClick={()=> setOpen6(false)}>&times;</span>
                <div className="popup">
                    <h>{projects_data[5].w_name}</h>
                    <p>{projects_data[5].w_description}</p>
                </div>
            </div>
        ) : (
            <div id='projects' className='projects'>
                <div className="projects-title">
                    <h1>Projects</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="projects-container">
                    {projects_data.map((work, index)=>{
                        return <img key={index} src={work.w_img} alt="" onClick={()=> {
                            if (index == 0) setOpen1(true);
                            if (index == 1) setOpen2(true);
                            if (index == 2) setOpen3(true);
                            if (index == 3) setOpen4(true);
                            if (index == 4) setOpen5(true);
                            if (index == 5) setOpen6(true);
                        }}/>
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
