import { linkParent } from '../helper'

function Showcase(parent) {
	const elm = `
	<div class="showcase_content">
		<div class="showcase_text">
            <h2 class="showcase_text-header">
				<span>Taking design tokens to </span>
				<span>the next level</span>
			</h2>

			<p class="showcase_text-description">
				<span>Specify helps you gain control of your design system across </span>
				<span>teams and products</span>
			</p>
        </div>
		
		<div class="showcase_btn-link">
			<a href="#" class="btn btn-link">Read vision</a>
		</div>

		<div class="showcase_container">
			<div class="showcase_wrapper">
				<div class="showcase_tabs">
					<a class="showcase_tab">
						<h3 href="">Unified Design Language</h3>
						
						<p>
							Centralize tokens from Figma Styles, Figma Variables, Tokens Studio, or your own JSON file and ensure a consistent design language across all your digital products. Specify supports over 50 token types.
						</p>
					</a>
					
					<a class="showcase_tab">
						<h3 href="">Unified Design Language</h3>
						
						<p>
							Centralize tokens from Figma Styles, Figma Variables, Tokens Studio, or your own JSON file and ensure a consistent design language across all your digital products. Specify supports over 50 token types.
						</p>
					</a>
					
					<a class="showcase_tab">
						<h3 href="">Unified Design Language</h3>
						
						<p>
							Centralize tokens from Figma Styles, Figma Variables, Tokens Studio, or your own JSON file and ensure a consistent design language across all your digital products. Specify supports over 50 token types.
						</p>
					</a>
				</div>
				</div>

				<div class="showcase_detail">
					<div class="showcase_detail-video">
						<video autoplay loop muted>
							<source src="./assets/showcase.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>
				</div>

			</div>
		</div>
	</div>
		`

	linkParent(parent, elm)
}

export default Showcase
