import NavBar from '../components/NavBar'
import { linkParent } from '../helper'
import logo from '../assets/images/logo.svg'

function Header(parent) {
	const numSupporters = 13
	const delayDivision = 60 / numSupporters

	const elm = `
    <div>
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
            
            ${Array.from(
				{ length: numSupporters },
				(_, i) => `
                    <div style="animation-delay: -${delayDivision * i + 1}s" 
                    
                    data-image-index="${i + 1}" 
                    class="supporter_img-container">
                        <img class="supporter_img" src="/src/assets/images/s-${
							i + 1
						}.svg" alt="" />
                    </div>
                `
			).join('')}

            </div>
        </div>
    </div>
    `
	linkParent(parent, elm)
	NavBar('#nav_container')
}

export default Header
