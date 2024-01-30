import styles from './Carousel.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project from '../projects';
import Slider from 'react-slick';
import { useState } from 'react';



export default function Carousel() {


  


  

const settings = {
  dots: true, // Show navigation dots
  infinite: true, // Infinite looping of slides
  speed: 500, // Transition speed in milliseconds
  slidesToShow: 1, // Number of slides to show at a time
  slidesToScroll: 1, // Number of slides to scroll per action
  arrows: true, // Show navigation arrows
  pauseOnHover: true, // Pause autoplay on hover
  responsive: [
    {
      breakpoint: 768, // Adjust settings for screens smaller than 768px
      settings: {
        slidesToShow: 2, // Show 2 slides at a time on smaller screens
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480, // Adjust settings for screens smaller than 480px
      settings: {
        slidesToShow: 1, // Show 1 slide at a time on even smaller screens
        slidesToScroll: 1
      }
    }
  ]
};


  


    const projects = [
        {
          image: '/projectImages/innersightphones.png',
          title: 'innersight',
          description:
            'Innersight is a mental health journaling application that utilizes AI sentiment analysis to examine your previous journal entries, identifying patterns in behaviors or events that may contribute to your symptoms. The aim of this app is to enhance your comprehension of your emotional well-being, while also assisting you in pinpointing elements in your daily life that bring you joy.',
            imageHeight: 300,
            imageWidth: 400,
            link: '/innersight'

        },
        {
            image: '/projectImages/pagepal.png',
            title: 'PagePal',
            description:
             'PagePal is a personal library management web app using React, powered by Google Books API. This application allows users to effortlessly organize and digitally track records for both physical books and e-books in a unified platform. PagePal was designed for readers who want to organize their physical and e-books they currently have as well as give them the ability to discover new ones.',
             imageHeight: 300,
             imageWidth: 600,
             link: '/pagepal'
          },
          {
            image: '/projectImages/westpoint.png',
            imageHeight: 300,
            imageWidth: 548,
            title: 'Westpoint Hotel',
            description:
             'WestPoint Hotel is a luxury resort on the beautiful island of the Carribean. This Wordpress website was designed to  emote feelings of exclusivity,luxury and elegance. This website includes 4 logo designs, specific typography and  images to extend Westpoint hotels branding into their online presence.',
             link: '/westpoint'
          },
      ];


   
    
    
    
  


      return (
        <div className={styles.slider}>

      
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className={styles.maincontent}>
            <div key={index}>
              <Project
                key={index}
                project={project}
                image={project.image}
                title={project.title}
                description={project.description}
                imageHeight={project.imageHeight}
                imageWidth={project.imageWidth}
                link={project.link} 
              />
            </div>
            </div>
          ))}
        </Slider>
        </div>
      );
    };
    