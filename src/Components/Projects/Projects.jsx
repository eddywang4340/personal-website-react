import React, { useState } from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.png'
import projects_data from '../../assets/projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import github_logo from '../../assets/github_logo.png'
import demo_logo from '../../assets/demo_logo.png'

const Projects = () => {

    const [isOpen1, setOpen1] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
    const [isOpen3, setOpen3] = useState(false);
    const [isOpen4, setOpen4] = useState(false);
    const [isOpen5, setOpen5] = useState(false);
    const [isOpen6, setOpen6] = useState(false);

    const redirectToGithub1 = () => {
        window.open("https://github.com/eddywang4340/Bird-Classifier-ML", "_blank");
    };

    const redirectToGithub2 = () => {
        window.open("https://github.com/eddywang4340/RoboticArm", "_blank");
    };

    const redirectToDemo2 = () => {
        // window.open("https://github.com/eddywang4340/RoboticArm", "_blank");
    };

    const redirectToGithub3 = () => {
        window.open("https://github.com/eddywang4340/2023-2706-Robot-Code/blob/main/src/main/java/frc/robot/subsystems/ArmSubsystem.java", "_blank");
    };

    const redirectToDemo3 = () => {
        // window.open("https://github.com/eddywang4340/RoboticArm", "_blank");
    };

    return (
        <>
        {isOpen1 ? (
            <div className="popup-project">
                <span onClick={()=> setOpen1(false)}>&times;</span>
                <div className="popup">
                    <h>{projects_data[0].w_name}</h>
                    <ul>
                        <li>{projects_data[0].w_bp_1}</li>
                        <li>{projects_data[0].w_bp_2}</li>
                        <li>{projects_data[0].w_bp_3}</li>
                        <li>{projects_data[0].w_bp_4}</li>
                    </ul>
                    <button className='projects-github-single' onClick={redirectToGithub1} type="button"><img src={github_logo}/>Github</button>
                </div>
            </div>
        ) : isOpen2 ? (
            <div className="popup-project">
                <span onClick={()=> setOpen2(false)}>&times;</span>
                <div className="popup">
                    <h>{projects_data[1].w_name}</h>
                    <ul>
                        <li>{projects_data[1].w_bp_1}</li>
                        <li>{projects_data[1].w_bp_2}</li>
                        <li>{projects_data[1].w_bp_3}</li>
                        <li>{projects_data[1].w_bp_4}</li>
                    </ul>
                    <button className='projects-github' onClick={redirectToGithub2} type="button"><img src={github_logo}/>Github</button>
                    <button className='projects-demo' onClick={redirectToDemo2} type="button"><img src={demo_logo}/>Demo</button>
                </div>
            </div>
        ) : isOpen3 ? (
            <div className="popup-project">
                <span onClick={()=> setOpen3(false)}>&times;</span>
                <div className="popup">
                    <h>{projects_data[2].w_name}</h>
                    <ul>
                        <li>{projects_data[2].w_bp_1}</li>
                        <li>{projects_data[2].w_bp_2}</li>
                        <li>{projects_data[2].w_bp_3}</li>
                        <li>{projects_data[2].w_bp_4}</li>
                    </ul>
                    <button className='projects-github' onClick={redirectToGithub3} type="button"><img src={github_logo}/>Github</button>
                    <button className='projects-demo' onClick={redirectToDemo3} type="button"><img src={demo_logo}/>Demo</button>
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
