import React from 'react'

function Fullstackdevelopment() {
  let fullstack = [
    {
      id: 1,
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      title: "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      subtitle: "As a full-stack developer, have you ever got bored of using the same HTML,CSS and Javascript codes?",
      date: "22 January 2024"
    },
    {
      id: 2,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      subtitle: "When you're hiring a full-stack developer, what are the most important things you look for?",
      date: "15 November 2023"
    },
    {
      id: 3,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      subtitle: "A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps.",
      date: "15 November 2023"
    },
    {
      id: 4,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png",
      title: "Top 10 Tools Every Full-Stack Developer Should Master in 2024",
      subtitle: "As a full-stack developer, having the right set of tools is crusial for your success.",
      date: "5 Augest 2023"
    },
    {
      id: 5,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      title: "Best Books to Learn Full-Stack Development",
      subtitle: "Are you interested in becoming a full-stack developer but not sure where to start?",
      date: "9 November 2023"
    },
    {
      id: 6,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title: "7 Best Full-Stack Development Online Courses[2024]",
      subtitle: "Today's world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise.",
      date: "31 Augest 2023"
    }
  ]
  return (
    <>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center">
          {fullstack.map((fsd) => (
            <div key={fsd.id} className="col my-4">
              <div className="card h-100 m-3">
                <img src={fsd.image} className="card-img-top h-50" alt="full-stack-development" />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bolder">{fsd.title}</h5>
                  <p className="card-text">
                    {fsd.subtitle}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{fsd.date} . No Comments</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>






      {/* <div className='container'>
        <div className="row g-5">
          {fullstack.map((fsd, index) => (
            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 w-100 m-4">
                <img src={fsd.image} className="card-img-top h-50" alt="full-stack-development" />
                <div className="card-body">
                  <h5 className="card-title">{fsd.title}</h5>
                  <p className="card-text">
                    {fsd.subtitle}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{fsd.date} . No Comments</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  )
}

export default Fullstackdevelopment