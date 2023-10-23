import React, { useState } from 'react';
import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook} from 'react-icons/ai';
import avatar from './assets/avatar.jpg';
import {FaReact, FaNodeJs, FaCss3, FaHtml5, FaBootstrap, FaGitAlt, FaRegCopyright} from 'react-icons/fa';
import {SiTailwindcss, SiMysql} from 'react-icons/si';
import {DiJavascript1} from 'react-icons/di';
import SkillsBar from './components/SkillsBar/SkillsBar';
import Education from './components/Education/Education';
import Employment from './components/Employment/Employment';
import Hobbies from './components/Hobbies/Hobbies';
import CV from '../src/assets/CV.png';

const App = () => {
  const [darkMode, setDarkMode ] = useState('false');


  return (
   <div className={darkMode ? "false" : "dark"}>

      <main className='bg-stone-300 dark:bg-stone-900'>

        {/* Navbar and Hero section */}
        <section className='border-b-2 border-emerald-600 pb-6'>
          <nav className='px-12 py-10 mb-6 flex justify-between max-sm:px-2 bg-emerald-600'>
            <h1 className='text-white text-xl font-semibold max-sm:text-lg'>Portfolio</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='text-2xl cursor-pointer'/>
              </li>
              <li>
                <a href={CV} className='bg-gradient-to-r from-stone-800 to-stone-400 px-4 py-2 rounded-md ml-8 text-white'
                >Resume</a>
              </li>
            </ul>
          </nav>

          <div className='text-center 8-10'>
            <h2 className='text-5xl text-stone-600 font-medium max-sm:text-2xl max-md:text-4xl'>Gorazd Kuzma</h2>
            <h3 className='text-2xl max-sm:text-xl my-4 text-stone-500'> Self Taught Developer</h3>
            <p className='w-3/5 my-0 mx-auto text-lg text-justify py-2 leading-7 text-stone-500 max-sm:text-sm'>
            I am very competitive person who is always trying hard to learn new things. That is why I wanted to learn programming and why I even started this journey. It would be great to work in a good team surrounded by people with the same interests and exploring new things. I always like to finish my work with maximum precision and curiosity. 
I am a little bit late with my college degree but it made me realize what I really want to do in my life. Now I am doing it with pleasure, happiness and because of this I think I am getting better at it day by day with learning new things. So I would love to get my first Job as a Developer to gain even more skills and experience
            </p>
          </div>

          <div className='flex justify-center'>
            <img src={avatar} alt="avatar" className='w-60 h-60 rounded-full border-2  border-emerald-600 my-3' />
          </div>

          <div className='text-5xl flex justify-center py-3 text-blue-600'>
            <form action="https://www.facebook.com/">
              <button type='submit'><AiFillFacebook className='cursor-pointer'/></button>
            </form>
          </div>
        </section>



        {/* Services Section */}
        <section className='pt-6 border-b-2 border-emerald-600 pb-6 flex-center justify-center items-center'>
          <div>
            <h3 className='pt-4 text-stone-600 text-center text-3xl py-1 max-[650px]:text-center'>Services I offer</h3>
            <p className='w-3/5 my-0 mx-auto text-lg text-stone-500 text-justfy py-2 leading-8 max-sm:text-sm max-sm:text-center'>
            In the table below you can see my personal preferation of my various Programming Languages skills knowledge. I would like to extend this list in the near future with a career opportunity to show of what I am really made of
            </p>
          </div>
           

          <div className=' w-10/12 my-0 mx-auto'>
            <div className='text-stone-500 text-3xl mt-12 flex gap-1 justify-between items-center border-b-4 border-stone-700 my-3 py-1'>
                <h3 className='font-bold max-[650px]:text-sm'>Programming Language</h3>
                <h3 className='font-bold max-[650px]:text-sm'>Experience</h3>

            </div>

            <div className='text-stone-500 font-extralight flex gap-1 justify-between items-center mb-3 border-b-2 border-stone-400'>
                <div className='flex justify-start items-center'>
                <h3 className='text-2xl max-[650px]:text-sm'>React</h3>
                <FaReact className='text-2xl max-[650px]:text-sm'/>
                </div>
                <h3 className='text-2xl max-[650px]:text-sm'>Good</h3>
            </div>

            <div className='text-stone-500 font-extralight flex gap-1 justify-between items-center mb-3 border-b-2 border-stone-400'>
                <div className='flex justify-start items-center'>
                <h3 className='text-2xl max-[650px]:text-sm'>NodeJS</h3>
                <FaNodeJs className='text-2xl max-[650px]:text-sm'/>
                </div>
                <h3 className='text-2xl max-[650px]:text-sm'>Good</h3>
            </div>

            <div className='text-stone-500 font-extralight flex gap-1 justify-between items-center mb-3 border-b-2 border-stone-400'>
                <div className='flex justify-start items-center'>
                <h3 className='text-2xl max-[650px]:text-sm'>Bootstrap</h3>
                <FaBootstrap className='text-2xl max-[650px]:text-sm'/>
                </div>
                <h3 className='text-2xl max-[650px]:text-sm'>Very good</h3>
            </div>

            <div className='text-stone-500 font-extralight flex gap-1 justify-between items-center mb-3 border-b-2 border-stone-400'>
                <div className='flex justify-start items-center'>
                <h3 className='text-2xl max-[650px]:text-sm'>Tailwind</h3>
                <SiTailwindcss className='text-2xl max-[650px]:text-sm'/>
                </div>
                <h3 className='text-2xl max-[650px]:text-sm'>Very good</h3>
            </div>

            <div className='text-stone-500 font-extralight flex gap-1 justify-between items-center mb-3 border-b-2 border-stone-400'>
                <div className='flex justify-start items-center'>
                <h3 className='text-2xl max-[650px]:text-sm'>CSS</h3>
                <FaCss3 className='text-2xl max-[650px]:text-sm'/>
                </div>
                <h3 className='text-2xl max-[650px]:text-sm'>Intermediate</h3>
            </div>

            <div className='text-stone-500 font-extralight flex gap-1 justify-between items-center mb-3 border-b-2 border-stone-400'>
                <div className='flex justify-start items-center'>
                <h3 className='text-2xl max-[650px]:text-sm'>HTML</h3>
                <FaHtml5 className='text-2xl max-[650px]:text-sm'/>
                </div>
                <h3 className='text-2xl max-[650px]:text-sm'>Intermediate</h3>
            </div>
          
            <div className='text-stone-500 font-extralight flex gap-1 justify-between items-center mb-3 border-b-2 border-stone-400'>
                <div className='flex justify-start items-center'>
                <h3 className='text-2xl max-[650px]:text-sm'>MySql</h3>
                <SiMysql className='text-2xl max-[650px]:text-sm'/>
                </div>
                <h3 className='text-2xl max-[650px]:text-sm'>Very good</h3>
            </div>
            
            <div className='text-stone-500 font-extralight flex gap-1 justify-between items-center mb-3 border-b-2 border-stone-400'>
                <div className='flex justify-start items-center'>
                <h3 className='text-2xl max-[650px]:text-sm'>Javascript</h3>
                <DiJavascript1 className='text-2xl max-[650px]:text-sm'/>
                </div>
                <h3 className='text-2xl max-[650px]:text-sm'>Very good</h3>
            </div>
            <div className='text-stone-500 font-extralight flex gap-1 justify-between items-center mb-3 border-b-2 border-stone-400'>
                <div className='flex justify-start items-center'>
                <h3 className='text-2xl max-[650px]:text-sm'>Git</h3>
                <FaGitAlt className='text-2xl max-[650px]:text-sm'/>
                </div>
                <h3 className='text-2xl max-[650px]:text-sm'>Very good</h3>
            </div>
          </div>
        </section>



        {/* About Me Section */}
        <section className='text-stone-800 dark:text-stone-200 py-10 h-full max-w-screen flex-col justify-center items-center border-b-2 border-emerald-600 pb-6'>
            <h1 className='text-center mb-12 text-5xl max-sm:text-xl my-4 text-stone-500'>About me</h1>
            <SkillsBar />
            <hr className='m-10'/>
            <Education/>
            <hr className='m-10'/>
            <Employment />
        </section>


        {/* Hobbies Section */}
        <section className='text-stone-800 dark:text-stone-200 py-10 h-full max-w-screen border-b-2 border-emerald-600 pb-6'>
        <h1 className='text-center mb-12 text-5xl max-sm:text-xl my-4 text-stone-500'>Hobbies</h1>
        <Hobbies />
        </section>


        {/* Footer section */}
        <footer className='h-3/4 bg-zinc-900 dark:bg-zinc-600 py-6 flex items-center justify-center'>
            <FaRegCopyright className='text-white'/>
            <h3 className='text-white ml-1'>Gorazd Kuzma</h3>
        </footer>
      </main>
  </div>
  )
}

export default App;
