import NavBar from '../components/NavBar'
import { linkParent } from '../helper'
import logo from '../assets/images/logo.svg'

function HomePage(parentEl) {
	const el = `
    <header class="header">
        <div class="nav_bar">
            <a href="#" class="nav_logo">
                <img src="${logo}" alt="Logo">
            </a>

            <div id="nav_container"></div>
            
            <a href="#" class="nav_link-btn">Sign In</a>
        </div>

        <div class="hero_wrapper">
             <div class="hero">
                <div class="hero_text">
                    <h1 class="hero_text-main">
                        Your Design Token Engine
                    </h1>

                    <p class="hero_text-sub">
                        <span>
                            Flexible and powerful, Specify makes it easy to build the exact 
                        </span>
                        <span>
                            Design Token workflow your Design System needs.
                        </span>
                    </p>
                </div>

                <div class="hero_video-wrapper">
                    <video autoplay loop class="hero_video">
                        <source loop src="src/assets/hero_video.mp4" type="video/mp4">
                  
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
        <div class="supporter">
            <div class="supporter_wrapper">
               <p class="supporter_text">Specified by Love</p>
            
                <div data-image-index="1" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-1.svg" alt="" />
                </div>
                <div data-image-index="2" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-2.svg" alt="" />
                </div>
                <div data-image-index="3" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-3.svg" alt="" />
                </div>
                <div data-image-index="4" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-4.svg" alt="" />
                </div>
                <div data-image-index="5" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-5.svg" alt="" />
                </div>
                <div data-image-index="6" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-6.svg" alt="" />
                </div>
                <div data-image-index="7" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-7.svg" alt="" />
                </div>
                <div data-image-index="8" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-8.svg" alt="" />
                </div>
                <div data-image-index="9" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-9.svg" alt="" />
                </div>
                <div data-image-index="10" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-10.svg" alt="" />
                </div>
                <div data-image-index="11" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-11.svg" alt="" />
                </div>
                <div data-image-index="12" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-12.svg" alt="" />
                </div>
                <div data-image-index="13" class="supporter_img-container">
                    <img class="supporter_img" src="/src/assets/images/s-13.svg" alt="" />
                </div>

            </div>
        </div>
    </header>

  `

	// Insert the HTML into the parent element
	linkParent(parentEl, el)

	// Render the NavBar inside the #nav_container
	NavBar('#nav_container')
}

export default HomePage
