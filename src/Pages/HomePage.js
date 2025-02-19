import { linkParent } from '../helper'
import Header from './Header'
import Service from './Service'
import Showcase from './Showcase'

function HomePage(parent) {
	const elm = `
    <div>
        <header class="header"></header>

    <main class="main">
        <section class="showcase"></section>
        <section class="service"></section>
    </main>
    
    </div>

  `

	// Insert the HTML into the parent element

	linkParent(parent, elm)

	Header('.header')
	Showcase('.showcase')
	Service('.service')

	// Render the NavBar inside the #nav_container
}

export default HomePage
