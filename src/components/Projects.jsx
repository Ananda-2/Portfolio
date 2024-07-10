import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const data = [
  {
    img: "../../public/project_images/shopsphere.png",
    title: "ShopSphere",
    desc: "an end-to-end website for client use, similar to e-commerce platforms",
    Github__Link: "https://github.com/Ananda-2/E-commerce-Project",
    Live__demo:
      "https://e-commerce-project-3blp-hve26qy6k-anandas-projects-91946f99.vercel.app/",
  },
  {
    img: "../../public/project_images/AI Image Gen.png",
    title: "AI Image Generator",
    desc: "an AI Image Generator utilizing MERN stack in conjunction with the OpenAI API .",
    Github__Link: "https://github.com/Ananda-2/AI-Image-Generator",
    Live__demo: "https://ananda-ai-image-generator.netlify.app/",
  },
  {
    img: "../../public/project_images/blockchain.jpg",
    title: "Decentralized Blood Supply",
    desc: " a decentralized blood supply system on blockchain using Next Js, enabling dynamic management of donors,suppliers, hospitals, and real-time blood distribution to meet patient needs",
    Github__Link: "https://github.com/Ananda-2/decentralized-blood-supply",
    Live__demo: "",
  },
  {
    img: "../../public/project_images/Thread.png",
    title: "Thread",
    desc: "Thread Clone",
    Github__Link: "https://github.com/Ananda-2/Thread-app",
    Live__demo: "",
  },
  {
    img: "../../public/project_images/css event page.png",
    title: "CSS NIT Durgapur",
    desc: "Official website of Computer Science Students society  , made on react Tailwind",
    Github__Link: "https://github.com/Ananda-2/CSS-Official-Website",
    Live__demo: "https://www.cssnitdgp.in/event",
  },
  {
    img: "../../public/project_images/Train reservation.png",
    title: "Train Reservation System",
    desc: " Train Reservation System manager with the concept of Object Oriented Programing conjunction with Operating System concept And Socket Io",
    Github: "https://github.com/Ananda-2/Train-Management-System",
    Live__demo: "",
  },
];

// All Project Items using map

const all__projects = data.map((each__project, i) => (
  <SwiperSlide key={i}>
    <img src={each__project.img} className="project__image" alt="photo" />

    <div className="details">
      <h1 className="project__title">{each__project.title}</h1>
      <p className="project__desc">{each__project.desc}</p>
      <div className="project__icon">
        <a href={each__project.Github__Link}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={each__project.Live__demo}>
          <FontAwesomeIcon icon={faCirclePlay} />
        </a>
      </div>
    </div>
  </SwiperSlide>
));

function Projects() {
  return (
    <div className="Project__div" id="Project__page">
      <div className="container">
        <h1 className="heading">Recent Projects</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {all__projects}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
