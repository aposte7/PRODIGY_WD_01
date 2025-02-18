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
    </header>
    `
	linkParent(parentEl, el)
	NavBar('#nav_container')
}

export default HomePage
