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
          <div className="blog card" key={index}>
            <img src={Dev} alt="dev comunity " />
            <div className="small">
              <span className="section-title">{blog.title}</span>
              <div>
                {blog.content}
              </div>
            </div>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-arrow-right"></i> {/* Assuming you're using Font Awesome */}
            </a>
          </div>
        ))}
      </section>
    </>
  )
}
