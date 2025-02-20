import { linkParent } from '../helper'

function Footer(parent) {
	const elm = `    
    <div>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Product</h3>
                <ul>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Changelog</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Parsers</a></li>
                    <li><a href="#">SDTF</a></li>
                    <li><a href="#">Use Cases</a></li>
                    <li><a href="#">Launch Week</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Guide</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">Press kit</a></li>
                    <li><a href="#">Climate</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Community</h3>
                <ul>
                    <li><a href="#">Discord</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Dribbble</a></li>
                </ul>
            </div>
    </div>
    <div class="footer-bottom">
        <p>Privacy policy | Terms of use | Security</p>
        <p>©2024 Specify - All rights reserved.</p>
    </div>
</div>

    `

	linkParent(parent, elm)
}

export default Footer
