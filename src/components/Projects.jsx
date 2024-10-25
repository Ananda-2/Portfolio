import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animate, setAnimate] = useState(false);

  // Sample projects data - replace with your actual projects
  const projects = [
      {
        id: 1,
        title: "ShopSphere",
        category: "Web Dev",
        image: "/public/project_images/shopsphere.png",
        demo: "https://e-commerce-project-3blp-hve26qy6k-anandas-projects-91946f99.vercel.app/",
        code: "https://github.com/Ananda-2/E-commerce-Project",
        description: "An end-to-end website for client use, similar to e-commerce platforms.",
      },
      {
        id: 2,
        title: "AI Image Generator",
        category: "AI/ML",
        image: "/public/project_images/AI Image Gen.png",
        demo: "https://ananda-ai-image-generator.netlify.app/",
        code: "https://github.com/Ananda-2/AI-Image-Generator",
        description: "An AI Image Generator utilizing MERN stack in conjunction with the OpenAI API.",
      },
      {
        id: 3,
        title: "Decentralized Blood Supply",
        category: "Blockchain",
        image: "/public/project_images/blockchain.jpg",
        demo: "https://github.com/Ananda-2/decentralized-blood-supply",
        code: "https://github.com/Ananda-2/decentralized-blood-supply",
        description: "A decentralized blood supply system on blockchain using Next.js, enabling dynamic management of donors, suppliers, hospitals, and real-time blood distribution to meet patient needs.",
      },
      {
        id: 4,
        title: "Thread",
        category: "Web Dev",
        image: "/public/project_images/Thread.png",
        demo: "https://github.com/Ananda-2/Thread-app",
        code: "https://github.com/Ananda-2/Thread-app",
        description: "Thread Clone.",
      },
      {
        id: 5,
        title: "CSS NIT Durgapur",
        category: "Web Dev",
        image: "/public/project_images/css event page.png",
        demo: "https://www.cssnitdgp.in/event",
        code: "https://github.com/Ananda-2/CSS-Official-Website",
        description: "Official website of Computer Science Students society, made with React and Tailwind.",
      },
      {
        id: 6,
        title: "Train Reservation System",
        category: "ALL",
        image: "/public/project_images/Train reservation.png",
        demo: "https://github.com/Ananda-2/Train-Management-System",
        code: "https://github.com/Ananda-2/Train-Management-System",
        description: "Train Reservation System manager with the concept of Object-Oriented Programming in conjunction with Operating System concepts and Socket.IO.",
      },
  ];

  const filters = ["All", "Web Dev", "Blockchain", "AI/ML"];

  useEffect(() => {
    setAnimate(false);
    const filtered = projects.filter((project) =>
      activeFilter === "All" ? true : project.category === activeFilter
    );

    // Add small delay for animation
    setTimeout(() => {
      setFilteredProjects(filtered);
      setAnimate(true);
    }, 100);
  }, [activeFilter]);

  return (
    <section className="projects-container">
      <h1 className="heading">Recent Projects</h1>
      <div className="filters-container">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`filter-button ${
              activeFilter === filter ? "active" : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <div className="project-links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link code"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
