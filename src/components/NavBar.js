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

	const selectedElm = document.querySelectorAll('.nav_item')
	console.log(selectedElm)
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
