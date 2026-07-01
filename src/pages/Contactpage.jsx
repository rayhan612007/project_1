import React from 'react'
import './contactpage.css'

const Contactpage = () => {
  return (
    <div>
        <div class="container">
            <div class="contact-section">
                
                <div class="left-box">
                    <h1>
                        <span class="star">✦</span>
                        Let's Connect
                    </h1>

                    <p>
                        I'm always open to discussing new projects, creative ideas or
                        opportunities.
                    </p>

                    <div class="info">
                        <div class="info-item">
                            <i class="fa-regular fa-envelope"></i>
                            <span>shivamgupta@gmail.com</span>
                        </div>

                        <div class="info-item">
                            <i class="fa-solid fa-phone"></i>
                            <span>+91 98765 43210</span>
                        </div>

                        <div class="info-item">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>New Delhi, India</span>
                        </div>

                        <div class="info-item purple">
                            <i class="fa-regular fa-clock"></i>
                            <span>Available for Freelance</span>
                        </div>
                    </div>

                    <div class="social-icons">
                        <a href="#"><i class="fa-brands fa-github"></i></a>

                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>

                        <a href="#"><i class="fa-brands fa-instagram"></i></a>

                        <a href="#"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>

                <div class="right-box">
                    <form>
                        <input type="text" placeholder="Your Name" />

                        <input type="email" placeholder="Your Email" />

                        <input type="text" placeholder="Subject" />

                        <textarea placeholder="Your Message"></textarea>

                        <button type="submit">
                        Send Message
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Contactpage