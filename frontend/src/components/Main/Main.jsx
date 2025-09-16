import React, { useState } from 'react'
import "./main.css"
import "./mediaquerie.css"
import Feedback from '../feedback/Feedback'
import profileimg from '../../assets/profileimage-modified.png'
import arrow from '../../assets/arrow.png'
import aboutpic from '../../assets/about-pic.jpg'
import checkmark from '../../assets/checkmark.png'
import education from '../../assets/education.png'
import email from '../../assets/email.png'
import experience from '../../assets/experience.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import miranda1 from '../../assets/miranda1.jpeg'
import sundown from '../../assets/sundown.png'
import project1 from '../../assets/project-1.png'


const Main = () => {

    const toggleMenu = () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    return (
        <>
            <div>
                <nav class="dextop-nav">
                    <div class="logo">Harsh Vishnoi</div>
                    <div>
                        <ul class="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <nav class="hamburger-nav">
                    <div class="logo">Harsh Vishnoi</div>
                    <div class="hamburger-menu">
                        <div class="hamburger-icon" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="menu-links">
                            <li><a href="#about" onClick={toggleMenu}>About</a></li>
                            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                            <li><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
                            <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
                        </div>
                    </div>
                </nav>
                <section class="profile">
                    <div class="section__pic-container">
                        <img src={profileimg} alt="harsh vishnoi profile pic" />
                    </div>

                    <div class="section__text">
                        <p class="section__text__p1">
                            Hello, i'm
                        </p>
                        <h1 class="title">Harsh Vishnoi</h1>
                        <p class="section__text__p2">Frontend Developer
                        </p>
                        <div class="btn-container">
                            <a href="src\components\Main\resume.pdf"><button class="btn btn-color-2">Resume
                            </button></a>
                            <a href="#Contact">
                                <button className="btn btn-color-1">Contact Info</button>
                            </a>
                        </div>
                        <div class="social-container">
                            <a href="https://github.com/harsh-dev29">
                                <img class="icon" src={linkedin} alt="my linkedIn_profile" />
                            </a>
                            <img class="icon" src={github} alt="my linkedIn_profile" />
                        </div>
                    </div>
                </section>
                <section id="about">
                    <p class="section__text__p1">
                        Go To Know More
                    </p>
                    <h1 class="title">
                        About Me
                    </h1>
                    <div class="section-container">
                        <div class="section__pic-container">
                            <img src={aboutpic} alt="profile picture" class="about-pic" />
                        </div>
                        <div class="about-detail-container">
                            <div class="about-containers">
                                <div class="details-container">
                                    <img src={experience} alt="experience icon" class="icon" />
                                    <h3>Experience</h3>
                                    <p>Basic <br /> Frontend Developer</p>
                                </div>
                                <div class="details-container">
                                    <img src={education} alt="education icon" class="icon" />
                                    <h3>Education</h3>
                                    <p>Bechalor Of Computer Application </p>
                                </div>
                            </div>
                            <div class="text-container">
                                <p>BCA student with a solid foundation in front-end development and a
                                    passion for creating dynamic, responsive and user-friendly web
                                    applications. Proficient in HTML, CSS, and JavaScript, with hands-on
                                    experience.</p>
                            </div>
                        </div>
                    </div>
                    <a href="#experience">
                        <img src={arrow} alt="arrow icon" class="icon arrow" />
                    </a>
                </section>
                <section id="experience">
                    <p class="section__text__p1">Explore My</p>
                    <h1 class="title">Experience</h1>
                    <div class="experience-details-container">
                        <div class="about-containers">
                            <div class="details-container">
                                <h2 class="experience-sub-title">Frontend Development</h2>
                                <div class="article-container">
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>HTML</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>CSS</h3>
                                            <p>Intermidiate</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>JavaScript</h3>
                                            <p>advance</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>SASS</h3>
                                            <p>Intermidiate</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>Tailwind</h3>
                                            <p>Intermidiate</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>React.Js</h3>
                                            <p>Intermidiate</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>Next.js</h3>
                                            <p>Intermidiate</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div class="details-container">
                                <h2 class="experience-sub-title">Backend Development</h2>
                                <div class="article-container">

                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>GIT</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>Github</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>MYSQL</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>Node.Js</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>Express.Js</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>MongoDB</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>Redis</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src={checkmark} alt="experience icon" class="icon" />
                                        <div>
                                            <h3>Pinecone</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a href="#Projects">
                        <img src={arrow} alt="arrow icon" class="icon arrow" />
                    </a>
                </section>
                <section id="Projects">
                    <p class="section__text__p1">Browse my recent</p>
                    <h1 class="title">Projects</h1>
                    <div class="experience-details-container">
                        <div class="about-containers">
                            <div class="details-container color-container">
                                <div class="article-container">
                                    <img src={miranda1} alt="project 1" class="project-img" />
                                </div>

                                <h2 class="experience-sub-title project-title">Miranda Paper portfolio-Clone</h2>
                                <div class="btn-container">
                                    <button class="btn btn-color-2 project-btn"
                                    ><a href="https://github.com/harsh-dev29">GitHub</a></button>
                                    <button class="btn btn-color-2 project-btn"
                                        onclick="location.href='https://teal-lamington-98b067.netlify.app/'">Demo</button>
                                </div>
                            </div>
                            <div class="details-container color-container">
                                <div class="article-container">
                                    <img src={sundown} alt="project 1" class="project-img" />
                                </div>

                                <h2 class="experience-sub-title project-title">Sundown Studio-Clone</h2>
                                <div class="btn-container">
                                    <button class="btn btn-color-2 project-btn"
                                        onclick="location.href='https://github.com/harsh-dev29/sundown-studio-clone'">GitHub</button>
                                    <button class="btn btn-color-2 project-btn"
                                        onclick="location.href='https://stalwart-gingersnap-28d947.netlify.app/'">Demo</button>
                                </div>

                            </div>
                            <div class="details-container color-container">
                                <div class="article-container">
                                    <img src={project1} alt="project 1" class="project-img" />
                                </div>

                                <h2 class="experience-sub-title project-title">Nike landig page </h2>
                                <div class="btn-container">
                                    <button class="btn btn-color-2 project-btn"
                                        onclick="location.href='https://github.com/harsh-dev29/nike-shoes-landing-page'">GitHub</button>
                                    <button class="btn btn-color-2 project-btn"
                                        onclick="location.href='https://harsh-dev29.github.io/nike-shoes-landing-page/'">Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#footer">
                        <img src={arrow} alt="arrow icon" class="icon arrow " />
                    </a>
                </section>
                <section id="Contact">
                    <p class="section__text__p1">Get in Touch</p>
                    <h1 class="title">
                        Contact Me
                    </h1>
                    <div class="contact-info-upper-container">
                        <div class="contact-info-container">
                            <img src={email} alt="email icon" class="icon" />
                            <p><a href="mailto:harshvishnoioffcial@gmail.com">Harshvishnoioffcial@gmail.com</a></p>
                        </div>
                        <div class="contact-info-container">
                            <img src={linkedin} alt="email icon" class="icon" />
                            <p><a href="https://www.linkedin.com/in/harsh-vishnoi-webdev/">LinkedIn</a></p>
                        </div>
                    </div>
                </section>
                <div>
                    <Feedback />
                </div>
                <footer id="footer">
                    <nav>
                        <div class="nav-links-container">
                            <ul class="nav-links">
                                <li><a href="#about">About</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#Projects">Projects</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <p>
                        Copyright &#169; 2024 Harsh Vishnoi. All rights Reserved.
                    </p>
                </footer>
            </div>

        </>
    )
}

export default Main