import React from 'react'
import './myprojectpage.css'

function Myprojectspage  ()  {
    const activ ="hover:bg-purple-800";
  return (
    <>
    <div class="container">
    <div class="projects-section">
      <div class="title">
        <div class="dot"></div>
        My Projects
      </div>

      <p class="subtitle">
        Some of the projects I've built
      </p>

      {/* filter */}

      <div class="filter-buttons">
        <button className={activ}>All</button>
        <button className="hover:bg-purple-800">Web Development</button>
        <button className="hover:bg-purple-800">IoT</button>
        <button >AI/ML</button>
      </div>

      {/* CARDS */}

      <div class="cards">

        {/* CARD 1 */}

        <div class="card">

        

        <video width="100%" autoplay loop muted> 
            

          <source src="/image/Task manger.mp4" type="video/mp4"/>

        </video>

        


          <div class="card-content">

            <h3>Task Manager Web App</h3>

            <div class="tags">
              <span class="yellow">HTML</span>
              <span class="blue">CSS</span>
              <span>JavaScript</span>
            </div>

            <p>
              A responsive task manager to add,
              delete and track daily tasks.
            </p>

            <a href="#" class="project-link">
              View Project →
            </a>

          </div>

        </div>

        {/* <!-- CARD 2 --> */}

        <div class="card">

          <img src="/image/img.jpg 02.webp" alt=""/>

          <div class="card-content">

            <h3>Weather App</h3>

            <div class="tags">
              <span class="yellow">HTML</span>
              <span class="blue">CSS</span>
              <span class="green">API</span>
            </div>

            <p>
              A weather application that shows
              real-time weather updates.
            </p>

            <a href="#" class="project-link">
              View Project →
            </a>

          </div>

        </div>

      {/* <!-- CARD 3 --> */}

        <div class="card">

        <img src="/image/img.jpg 03.gif" alt=""/>

          <div class="card-content">

            <h3>E-Commerce Website</h3>

            <div class="tags">
              <span class="yellow">React.js</span>
              <span class="yellow">Node.js</span>
              <span class="green">MongoDB</span>
            </div>

            <p>
              A full stack e-commerce website
              with cart and authentication.
            </p>

            <a href="#" class="project-link">
              View Project →
            </a>

          </div>

        </div>

        {/* <!-- CARD 4 --> */}

        <div class="card">

          <img src="/image/img.jpg 04.webp" alt=""/>

          <div class="card-content">

            <h3>Smart Home Dashboard</h3>

            <div class="tags">
              <span class="yellow">IoT</span>
              <span class="blue">Arduino</span>
              <span class="yellow">Dashboard</span>
            </div>

            <p>
              IoT based smart home dashboard
              to control appliances remotely.
            </p>

            <a href="#" class="project-link">
              View Project →
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>
    </>
  )}
    

export default Myprojectspage