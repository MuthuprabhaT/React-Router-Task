import React from 'react'

function Datascience() {

  let dataScience = [
    {
      id: 1,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      subtitle: "Are you someone who's not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary?",
      date: "28 November 2023"
    },
    {
      id: 2,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      subtitle: "In today's data-driven world, data science has emerged as a crusial field, with companies harnessing the power of data to gain valuable insights and make informed decisions.",
      date: "10 November 2023"
    },
    {
      id: 3,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      title: "What is the Difference between Data Science and Data Engineering?",
      subtitle: "India has been making some serious waves in the world of data.",
      date: "8 November 2023"
    },
    {
      id: 4,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Data Science Books to Learn in 2024",
      subtitle: "Today, we're going to talk about something really cool: data science.It's all about using data to make smart decisions and create amazing things.",
      date: "26 October 2023"
    },
    {
      id: 5,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp",
      title: "10 Best Data Science Frameworks in 2024",
      subtitle: "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      date: "5 Augest 2023"
    },
    {
      id: 6,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Way to Learn Data Science in 2024",
      subtitle: "The world of data science is vast and captivating, but with so much information available, finding the best way to learn and master this field can be overwhelming.",
      date: "28 July 2023"
    }
  ]

  return (
    <>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center">
          {dataScience.map((ds) => (
            <div key={ds.id} className="col my-4">
              <div className="card h-100 m-3">
                <img src={ds.image} className="card-img-top h-50" alt="data-science" />
                <div className="card-body p-4">
                  <h5 className="card-title">{ds.title}</h5>
                  <p className="card-text">
                    {ds.subtitle}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{ds.date} . No Comments</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Datascience