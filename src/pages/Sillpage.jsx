import React from 'react'
import './skill.css'

function Sillpage ()  {
  return (
    <div class="main">
        <div class="text">
            <ul>
            <li>My skills</li>
            </ul>
            <p>Technologies: Work with</p>
        </div>
        <div class="contain">
            <h2>Technical skills</h2>
                <div class="skills-container">
                    <div class="skill-card">
                        <div class="icon"><span className='text-orange-600'>H</span></div>
                        <div class="details">
                            <div class="header-row">
                                <span class="skill-name">HTML</span>
                                <span class="percentage">90%</span>
                            </div>
                            <div class="progress-bg">
                                <div className='bg-linear-to-r from-[#6e40ff] to-[#a371ff] h-full rounded-[10px] w-[80%]'></div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-card">
                        <div class="icon"><span className='text-blue-500'>R</span></div>
                        <div class="details">
                            <div class="header-row">
                                <span class="skill-name">React.js</span>
                                <span class="percentage">75%</span>
                            </div>
                            <div class="progress-bg">
                                <div className='bg-linear-to-r from-[#6e40ff] to-[#a371ff] h-full rounded-[10px] w-[75%]'></div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-card">
                        <div class="icon"><span className='text-blue-900'>C</span></div>
                        <div class="details">
                            <div class="header-row">
                                <span class="skill-name">CSS</span>
                                <span class="percentage">85%</span>
                            </div>
                            <div class="progress-bg">
                                <div className='bg-linear-to-r from-[#6e40ff] to-[#a371ff] h-full rounded-[10px] w-[80%]'></div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-card">
                        <div class="icon"><span className='text-yellow-500'>P</span></div>
                        <div class="details">
                            <div class="header-row">
                                <span class="skill-name">Python</span>
                                <span class="percentage">85%</span>
                            </div>
                            <div class="progress-bg">
                                <div className='bg-linear-to-r from-[#6e40ff] to-[#a371ff] h-full rounded-[10px] w-[80%]'></div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-card">
                        <div class="icon"><span className='text-yellow-500'>J</span></div>
                        <div class="details">
                            <div class="header-row">
                                <span class="skill-name">JavaScript</span>
                                <span class="percentage">80%</span>
                            </div>
                            <div class="progress-bg">
                                <div className='bg-linear-to-r from-[#6e40ff] to-[#a371ff] h-full rounded-[10px] w-[80%]'></div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-card">
                        <div class="icon"><span className='text-blue-900'>C+</span></div>
                        <div class="details">
                            <div class="header-row">
                                <span class="skill-name">C++</span>
                                <span class="percentage">70%</span>
                            </div>
                            <div class="progress-bg">
                                <div className='bg-linear-to-r from-[#6e40ff] to-[#a371ff] h-full rounded-[10px] w-[70%]'></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="futer">
            <h2>Tools and Technologies</h2>
            <div class="boxes">
                <div class="box">
                    <a href="https://code.visualstudio.com"
                    ><img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                        alt=""
                        className='w-20 h-16.25'
                    />
                    <br />
                    <p>VS code</p>
                    </a>
                </div>
                <div class="box">
                    <a href="https://github.com"
                    >
                        <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt=""
                        className='flex items-center justify-center w-17 h-16.5 rounded-full'
                    />
                    <br />
                    <p>GitHub</p>
                    </a>
                </div>
                <div class="box">
                    <a href="https://www.figma.com"
                    ><img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                        alt=""
                        className='w-20 h-16.25'
                    />
                    <br />
                    <p>Figma</p>
                    </a>
                </div>
                <div class="box">
                    <a href="https://firebase.google.com"
                    ><img
                        src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-logomark.png"
                        alt="Firebase Logo"
                        className='w-20 h-16.25'
                    />
                    <br />
                    <p>Firebase</p>
                    </a>
                </div>
                <div class="box">
                    <a href="https://www.mysql.com"
                    ><img
                        src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
                        alt="MySQL Logo"
                        className='w-20 h-16.25'
                    />
                    <br />
                    <p>MySQL</p>
                    </a>
                </div>
                <div class="box">
                    <a href="https://www.postman.com"
                    ><img
                        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                        alt="Postman Logo"
                        className='w-18 h-16.25'
                    />
                    <br />
                    <p>Postman</p>
                    </a>
                </div>
            </div>
        </div>
    </div>   
  )};

export default Sillpage