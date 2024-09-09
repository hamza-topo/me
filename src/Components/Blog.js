import React, { Component }  from 'react';
import Dev from '../dev.png';

export function Blog() {
  const blogs = [
    { published: 'Feb 6 2024', link: 'https://dev.to/hamzatopo/laravel-design-pattern-repository-4m7f', title: "How to use repository design pattern in laravel ? ", content: "I vividly recall my initial encounter with the term 'Design Pattern' – a moment of profound confusion as I grappled with whether it was a mere philosophical concept or a collection of abstract theories. The burning question in my mind was: how could such a concept be practically applied to something as tangible as my to-do list project 😅?..." },
    { published: 'Sep 5 2024', link: 'https://dev.to/hamzatopo/react-js-github-actions-321e', title: "How to Deploy Reactjs application using Github Pages ? ", content: "Hey there, fellow developers! 🎉 Let's get your React app out into the world! 🚀 Today, we're going to deploy it to GitHub Pages, a super easy way to share your creations with everyone...." },
    // { link: 'https://dev.to/hamzatopo/laravel-design-pattern-repository-4m7f', title: "How to use repository design pattern in laravel ? ", content: "I vividly recall my initial encounter with the term 'Design Pattern' – a moment of profound confusion as I grappled with whether it was a mere philosophical concept or a collection of abstract theories. The burning question in my mind was: how could such a concept be practically applied to something as tangible as my to-do list project 😅?..." },

  ];
  return (
    <>
      <section className='blogs component'>
        {blogs.map((blog, index) => (
          <div className="me card">
            <img src={Dev} alt="" />
            <p className="small">
              <a href={blog.link} target="_blank" rel="noopener noreferrer"><h1 className='section-title'>{blog.title}</h1></a><br></br>
              {blog.content}
              <ul className='header-socials-icons'>
                <li><span className='text-span'>{blog.published}</span></li>
                <li><a href={blog.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-arrow-right"></i></a></li>
              </ul>
            </p>
          </div>
        ))}
      </section>
    </>
  )
}
