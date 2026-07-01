import React from 'react'
import './aboutpage.css'

function Aboutpage ()  {
  return (
    <div className="container">
        <h1 class="about-title">✨ About Me</h1>

        <div class="about-box" className='lg:flex gap-10 md:items-start md:justify-between'>
            <div className='flex items-center md:items-start justify-center md:justify-start'>
                <div class="profile-img" className='h-70 w-70 lg:w-80 lg:h-75 lg:mt-20 lg:shadow-2xl lg:shadow-purple-600 lg:rounded-4xl lg:border-4 lg:border-purple-600 rounded-full md:rounded-3xl md:mt-2
                md:shadow-2xl md:shadow-purple-700 mb-10 overflow-hidden '>
                    <img src="/image/manpic.jpg" alt="" />
                </div>

            </div>


            <div class="about-content " className='md:flex lg:flex-col md:justify-between gap-5 ' >
                <div className='md:w-[50%] lg:w-full' >
                        <h2 className='text-2xl font-bold mb-4'>
                        I'm a Computer Science student who loves to code and build amazing things.
                        </h2>

                        <p>
                        I enjoy turning ideas into real-world solutions through clean and efficient code.
                        I'm interested in Web Development, IoT, and Artificial Intelligence.
                    </p>
                </div>
            

                <div class="info-grid md:-mt-70 lg:mt-0">

                <div class="info-item">
                    <span>Name</span>
                    Shivam Gupta
                </div>

                <div class="info-item">
                    <span>Degree</span>
                    B.Tech CSE
                </div>

                <div class="info-item">
                    <span>Age</span>
                    21
                </div>

                <div class="info-item">
                    <span>Email</span>
                    shivamgupta@gmail.com
                </div>

                <div class="info-item">
                    <span>Location</span>
                    Faridpur, Dhaka
                </div>

                <div class="info-item">
                    <span>Freelance</span>
                    Available
                </div>

                </div>

            </div>

        </div>

        <div class="journey">

        <h3>My Journey</h3>

        <div class="timeline">

            <div class="timeline-item">
            <h4>2022</h4>
            <p>Started my journey in Computer Science</p>
            </div>

            <div class="timeline-item">
            <h4>2023</h4>
            <p>Built my first web application</p>
            </div>

            <div class="timeline-item">
            <h4>2024</h4>
            <p>Explored IoT and Machine Learning</p>
            </div>

            <div class="timeline-item">
            <h4>2025</h4>
            <p>Working on amazing projects</p>
            </div>

        </div>

        </div>

    </div>
    

  
)};


export default Aboutpage
