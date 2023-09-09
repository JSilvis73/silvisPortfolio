import React from "react";
import { Avatar } from "../../components/avatar";
import './personal.css';
import avatarDefault from '../../assets/images/avatarDefault.jpg';
import fEndLanguage from '../../assets/images/front-end-stack.png';
import reactLogo from '../../assets/images/React.jpeg';
import githubLogo from '../../assets/images/rubaitul-azad-HLQDfaJUTVI-unsplash (1).jpg';


export const Personal = () => {
    return (
        <div className="">
            <header>
                <h1>Jason Silvis</h1>
            </header> 

            <div>
                <Avatar 
                img={avatarDefault}
                />
            </div>

            <div>
                This section will be about me.
            </div>
            
            
            <div  class="carousel slide">
                <div class="carousel-indicators">
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={fEndLanguage} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5> Coding Languages</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
             <div class="carousel-item">
               <img src={reactLogo} class="d-block w-100" alt="..."/>
               <div class="carousel-caption d-none d-md-block">
                  <h5>Framworks</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={githubLogo} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                   <h5>Skills</h5>
                   <p>Some representative placeholder content for the third slide.</p>
                </div>
               </div>
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
              </button>
            </div>
            
        </div>
    )
};