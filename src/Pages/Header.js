import NavBar from '../components/NavBar'
import { linkParent } from '../helper'

function Header(parent) {
	const numSupporters = 13
	const delayDivision = 60 / numSupporters

	const elm = `
        <div class="nav_bar">
            <a href="#" class="nav_logo">
                <img  src="assets/icons/logo.svg" alt="Logo">
            </a>

            <div id="nav_container"></div>
            
            <div class="nav_action">
                <a href="#" class="nav_link-btn btn ">Sign In</a>
                <button class="menu_btn" data-toggle-menu>
                    <span class="menu_bar"></span>
                </button>
            </div>
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
                    <video autoplay loop muted class="hero_video">
                        <source src="assets/hero_video.mp4" type="video/mp4">
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
                        <img class="supporter_img" src="assets/icons/s-${
							i + 1
						}.svg" alt="" />
                    </div>
                `
			).join('')}

            </div>
        </div>
`
	linkParent(parent, elm)
	NavBar('#nav_container')
}

export default Header
