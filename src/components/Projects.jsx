import React from 'react';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-regular-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const data = [
  {
    "img" : '../../public/project_images/img-1.jpg' ,
    "title" : "Project Title" ,
    "desc" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut",
    "Github__icon" : {faGithub} ,
    "Live__demo" : {faCirclePlay} ,
  },
  {
    "img" : '../../public/project_images/img-1.jpg' ,
    "title" : "Project Title" ,
    "desc" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut",
    "Github__icon" : {faGithub} ,
    "Live__demo" : {faCirclePlay} ,
  },
  {
    "img" : '../../public/project_images/img-1.jpg' ,
    "title" : "Project Title" ,
    "desc" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut",
    "Github__icon" : {faGithub} ,
    "Live__demo" : {faCirclePlay} ,
  },
  {
    "img" : '../../public/project_images/img-1.jpg' ,
    "title" : "Project Title" ,
    "desc" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut",
    "Github__icon" : {faGithub} ,
    "Live__demo" : {faCirclePlay} ,
  },
  {
    "img" : '../../public/project_images/img-1.jpg' ,
    "title" : "Project Title" ,
    "desc" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut",
    "Github__icon" : {faGithub} ,
    "Live__demo" : {faCirclePlay} ,
  },
  {
    "img" : '../../public/project_images/img-1.jpg' ,
    "title" : "Project Title" ,
    "desc" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut",
    "Github__icon" : {faGithub} ,
    "Live__demo" : {faCirclePlay} ,
  },
  {
    "img" : '../../public/project_images/img-1.jpg' ,
    "title" : "Project Title" ,
    "desc" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut",
    "Github__icon" : {faGithub} ,
    "Live__demo" : {faCirclePlay} ,
  }

] ;


// All Project Items using map

const all__projects = data.map((each__project,i) => 
  <SwiperSlide key={i}>
    <img src = {each__project.img} alt='photo'/>

    <div className="details">
      <h1 className="project__title">{each__project.title}</h1>
      <p className="project__desc">{each__project.desc}</p>
      <div className='project__icon'>
        <a href="http://"><FontAwesomeIcon  icon= {faGithub} /></a>
        <a href="http://"><FontAwesomeIcon  icon= {faCirclePlay} /></a>

    </div>
    </div>
  </SwiperSlide>
)





function Projects() {
  return (
    <div className = 'Project__div' id='Project__page'>
    <div className="container">
      <h1 className="heading">Recent Projects</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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

