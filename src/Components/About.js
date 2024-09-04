import React from 'react'
import Me from '../me.jpg';
export function About() {
    return (
        <>
            <section id="about-me" className='about component'>
                <div className="me card">
                    <img src={Me} alt="" />
                    <p className="small">
                        Hamza, or as my friends know me, TOPO, is a 29-year-old full-stack developer from Morocco. 🇲🇦 <br></br> With a passion for crafting elegant web applications, I specialize in Laravel, ReactJs.
                        <br></br> 🚀 My goal is to create seamless digital experiences that delight users and drive results. ✨<br></br>
                        You can check out my social networks below:
                        <ul className='header-socials-icons'>
                            <li><a href='https://twitter.com/topo444042922' target="_blank" rel='twitter'><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/hamza-hamza-a2ab1a24b/" target="_blank" rel='linkedin'><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/hamza-topo" target='_blank' rel='github'><i className="fa-brands fa-github"></i></a></li>
                        </ul>
                    </p>
                </div>
            </section>
        </>
    )
}
