import { linkParent } from '../helper'
import Header from './Header'

function HomePage(parent) {
	const elm = `
    <header class="header">
        
    </header>

  `

	// Insert the HTML into the parent element
	linkParent(parent, elm)

	Header('.header')
	// Render the NavBar inside the #nav_container
}

export default HomePage
