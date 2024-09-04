import React from 'react'
import Dev from '../dev.png'
export function Blog() {
  const blogs = [
    { link: 'https://dev.to/hamzatopo/laravel-design-pattern-repository-4m7f', title: "How to use repository design pattern in laravel ? ", content: "I vividly recall my initial encounter with the term 'Design Pattern' – a moment of profound confusion as I grappled with whether it was a mere philosophical concept or a collection of abstract theories. The burning question in my mind was: how could such a concept be practically applied to something as tangible as my to-do list project 😅?..." },

  ];
  return (
    <>
      <section className='blogs component'>
        {blogs.map((blog, index) => (
          <div className="me card">
            <img src={Dev} alt="" />
            <p className="small">
              {blog.content}
              <ul className='header-socials-icons'>
                <li><a href={blog.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-arrow-right"></i></a></li>
              </ul>
            </p>
          </div>
        ))}
      </section>
    </>
  )
}
