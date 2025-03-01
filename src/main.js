import './style.css'
import HomePage from './Pages/HomePage.js'

document.querySelector('#app').innerHTML = `
  <div id="page">
    
  </div>
`

HomePage('#page')

const toggleClass = () => {
	const btn = document.querySelector('[data-toggle-menu]')
	btn.addEventListener('click', () => {
		document.querySelector('#nav_container').classList.toggle('active')
		document.querySelector('.menu_btn').classList.toggle('active')
	})
}

toggleClass()
// src/main.js
