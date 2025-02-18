import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="main-body">
    <header id="counter">
    
    </header>
  </div>
`

setupCounter(document.querySelector('#counter'))
