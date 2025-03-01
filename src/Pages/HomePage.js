import { linkParent } from '../helper'
import Footer from './Footer'
import Header from './Header'
import Service from './Service'
import Showcase from './Showcase'
import Testimony from './Testimony'

function HomePage(parent) {
	const elm = `
    <div>
        <header class="header"></header>

    <main class="main">
        <section class="showcase" id="solution"></section>
        <section class="service" id="service"></section>
        <section class="testimony"></section>
    </main>

    <footer class="footer" id="about"></footer>

    </div>

  `

	// Insert the HTML into the parent element

	linkParent(parent, elm)

	Header('.header')
	Showcase('.showcase')
	Service('.service')
	Testimony('.testimony')
	Footer('.footer')

	// Render the NavBar inside the #nav_container
}

export default HomePage
