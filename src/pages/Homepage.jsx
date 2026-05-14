import React from 'react'
const stats = [
  { ico: "/image/date.png", value: "2+", label: "Years of Learning" },
  { ico: "/image/terminal.png", value: "10+", label: "Projects Completed" },
  { ico: "/image/trophy.png", value: "3", label: "Certifications" },
  { ico: "/image/coffee-cup.png", value: "100+", label: "Hours of Coding" },
];

const sociallink = [
  { icon: "/image/x.png", url: "https://twitter.com" },
  { icon: "/image/linkedin (1).png", url: "https://linkedin.come" },
  { icon: "/image/github (1).png", url: "https://github.com" },
  { icon: "/image/facebook (1).png", url: "https://facebook.com" },
];
import Navbar from '../element/Navbar'

function Homepage() {
  const clas = "items-center  flex flex-col gap-2 p-4 text-center border-b border-white/50 hover:bg-[#1a1f35] md:border-r md:border-b-0 transition-colors"
  return (
    <div>
      <div className="min-h-screen w-full max-x-3xl bg-[#0a0d14] text-white font-sans px-4 py-10 flex flex-col items-center justify-center">

        <div className="w-full bg-[#0f1221] rounded-2xl p-8 relative overflow-hidden border border-white/5 shadow-2xl">
          <div className="flex flex-col md:flex-col items-center md:items-start lg:items-start gap-2 lg:flex-col ">

            <div className='flex flex-col md:flex-row items-center md:gap-15 gap-4 lg:flex-row lg:gap-80 '> 

              <div>


                <div className="flex-1 z-10">
                  <div className="inline-flex items-center gap-2 bg-[#1a1f35] border border-white/10 rounded-full px-3 py-1 text-sm text-gray-300 mb-4">
                    <span>👋</span> Hello, I'm
                  </div>


                  <h1 className="text-4xl font-bold mb-1">
                    Shivam <span className="text-purple-500">Gupta</span>
                  </h1>

                  <p className="text-gray-300 font-medium text-lg mb-3">Computer Science Student</p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                    I'm a passionate developer who loves building web applications and exploring new technologies.
                    Currently pursuing B.Tech in Computer Science.
                  </p>

                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    <button className="flex items-center gap-2  border border-white/20 hover:shadow-2xl hover:shadow-purple-600 hover:bg-purple-700 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-lg">
                      View Projects 
                    </button>
                    <button className="flex items-center gap-2 border border-white/20 hover:shadow-2xl hover:shadow-purple-600 hover:bg-purple-700 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-lg">
                      Contact Me
                    </button>
                  </div>

                </div>
                <div className='flex items-center gap-8 md:gap-5 lg:gap-3'>
                  {sociallink.map((self,i) => (
                    
                    <a
                      key={i}
                    href={self.url} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors border hover:shadow-xl hover:shadow-purple-700 hover:bg-purple-700 hover:border-none rounded-full p-1 bg-gray-900 size-12 justify-center items-center "
                    >
                      <img src = {self.icon} alt="" className='' />
                    </a>
                  ))}

                </div>
              </div>
              
              <img src="/image/manpic.jpg" alt="" className='size-50 border-0 md:shadow-2xl md:shadow-purple-700/15 lg:shadow-4xl lg:shadow-purple-600 rounded-full md:border-4 md:border-purple-700 md:size-90 ' />
            </div>
              
          

            <div className="w-full  mt-4 bg-[#0f1221] rounded-2xl px-8 py-6 border border-white/5 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((self,i) => (
                  
                    
                  <div key={i} className={clas}>
                    <img src={self.ico} alt="" className='size-13'/>
                    <h2>{self.value}</h2>
                    <p>{self.label}</p>                 
                  </div>
                ))}

              </div>

            </div>




           </div>


        </div>


      </div>

    </div>
  )}
export default Homepage