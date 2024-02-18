import React from 'react'

function Cybersecurity() {

  let cybersecurity = [
    {
      id: 1,
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      subtitle: "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.",
      date: "27 December 2022"
    },
    {
      id: 2,
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      subtitle: "Look around today, you will witness that we are more reliant on technology and devices than ever before.",
      date: "20 December 2022"
    },
    {
      id: 3,
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      subtitle: "Have you ever wondered what hacking is all about? It's big deal in today's tech-heacy world, and it can be both fascinating and scary.",
      date: "25 September 2023"
    },
    {
      id: 4,
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      subtitle: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is:Well, it depends on many facets.",
      date: "22 June 2022"
    },
    {
      id: 5,
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners-768x366.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      subtitle: "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times.",
      date: "1 March 2021"
    },
    {
      id: 6,
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-945x495.png",
      title: "The Cybersecurity Surge:5 Must-Have Cybersecurity Certifications!",
      subtitle: "There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism.",
      date: "1 March 2021"
    }
  ]

  return (
    <>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center">
          {cybersecurity.map((cyber) => (
            <div key={cyber.id} className="col my-4">
              <div className="card h-100 m-3">
                <img src={cyber.image} className="card-img-top h-50" alt="cyber-security" />
                <div className="card-body p-4">
                  <h5 className="card-title">{cyber.title}</h5>
                  <p className="card-text">
                    {cyber.subtitle}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{cyber.date} . No Comments</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Cybersecurity