import { linkParent } from '../helper'

function NavBar(parent) {
	const elm = ` 
		<div class="nav_list">
			${liElm('Home')}
			${liElm('Solution')}
			${liElm('Resource')}
			${liElm('About')}
		</div>`

	linkParent(parent, elm)

	document.addEventListener('DOMContentLoaded', () => {
		const navItems = document.querySelectorAll('.nav_item')

		navItems.forEach((item) => {
			item.addEventListener('click', function () {
				// Remove 'nav_active' from all items
				navItems.forEach((nav) => nav.classList.remove('nav_active'))

				// Add 'nav_active' to the clicked item
				this.classList.add('nav_active')
			})
		})
	})
}

function liElm(value, to = '#') {
	const el = `
	<div class="nav_item">
		<a class="nav_link" href=${to}>
			${value}
		</a>
	</div>`

	return el
}

export default NavBar
