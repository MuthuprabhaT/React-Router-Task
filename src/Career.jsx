import React from 'react'

function Career() {

  let career = [
    {
      id: 1,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp",
      title: "Master Javascript Frontend Roadmap:From Novice to Expert[2024]",
      subtitle: "Are you eager to learn Javascript?Want to dive deep into the JavaScript frontend roadmap?",
      date: "2 January 2024"
    },
    {
      id: 2,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title: "Top 5 IT Jobs for Economics Students",
      subtitle: "In today's digital age, the intersection of economics and technology offers exciting career opportunities for students with a backgroung in economics.",
      date: "4 December 2023"
    },
    {
      id: 3,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp",
      title: "Top 5 Product-Based Companies That Don't Require Coding",
      subtitle: "Every one of us wants to work in top product-based companies, Right? But, Not everyone has great coding skills.",
      date: "24 November 2023"
    },
    {
      id: 4,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
      title: "Best Product-Based Companies for AI Engineers in 2024",
      subtitle: "There was a time when AI was the future. Well, it has now become our present, a wonderful reality of the 21 st century.",
      date: "10 November 2023"
    },
    {
      id: 5,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-based-Company-Vs-Service-based-Company.webp",
      title: "Product-based Company Vs Service-based Company:Which is Best Choice?",
      subtitle: "Deciding between joining a product-based company vs a service-based company can be pretty challenging when navigating through the corporate landscape.",
      date: "2 November 2023"
    },
    {
      id: 6,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-in-india.webp",
      title: "Top 10 Product-Based Companies in India",
      subtitle: "Product-based companies in India have become the epitome of innovation and excellence in the IT sector.",
      date: "10 November 2023"
    }
  ]

  return (
   <>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center">
          {career.map((caree) => (
            <div key={caree.id} className="col my-4">
              <div className="card h-100 m-3">
                <img src={caree.image} className="card-img-top h-50" alt="career" />
                <div className="card-body p-4">
                  <h5 className="card-title">{caree.title}</h5>
                  <p className="card-text">
                    {caree.subtitle}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{caree.date} . No Comments</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Career