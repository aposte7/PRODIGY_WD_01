import { linkParent } from '../helper'

function Service(parent) {
	const elm = `
	<div class="service_content">
		<div class="service_text">
            <h2 class="service_text-header">
				<span>Easy setup and</span>
				<span>instant output</span>
			</h2>

			<p class="service_text-description">
				<span>
                    Nothing has been more easy for designers and more
                </span>
				<span>customizable for developers</span>
			</p>
        </div>
			
		<div class="service-link-btn">
			<a href="#" class="btn btn-link">Watch video</a>
		</div>


        <div class="service_wrapper">
            <div class="service_box">
                <div class="service_box-wrapper">
                    <h2 class="service_box-header">
                    Sync your tokens
                    </h2>

                    <p class="service_box-description">
                        Specify is natively compatible with Figma, GitHub, Notion, Raycast, and many more to come. Our REST API and CLI help you to connect even more. 
                    </p>

                    <div class="service_btn">
                        <a href="#" class="btn btn-link">Discover all available apps -> </a>
                    </div>
                </div>

                <div class="service_image">
                    <img src="./assets/images/service_box_1.jpg" alt="" />
                </div>
            </div>
            <div class="service_box">
                <div class="service_box-wrapper">
                    <h2 class="service_box-header">
                    Sync your tokens
                    </h2>

                    <p class="service_box-description">
                        Specify is natively compatible with Figma, GitHub, Notion, Raycast, and many more to come. Our REST API and CLI help you to connect even more. 
                    </p>

                    <div class="service_btn">
                        <a href="#" class="btn btn-link">Discover all available apps -> </a>
                    </div>
                </div>

                <div class="service_image">
                    <img src="./assets/images/service_box_1.jpg" alt="" />
                </div>
            </div>
        </div>

        <div class="service_list">
            <div class="service_item">
                <h4>Stay flexible</h4>
                <p>
                    Sync tokens from multiple sources to one repository, extract them in any structure using our SDK, GitHub integration, or CLI. We got you covered once you want to scale.
                </p>
            </div>
            <div class="service_item">
                <h4>Stay flexible</h4>
                <p>
                    Sync tokens from multiple sources to one repository, extract them in any structure using our SDK, GitHub integration, or CLI. We got you covered once you want to scale.
                </p>
            </div>
            <div class="service_item">
                <h4>Stay flexible</h4>
                <p>
                    Sync tokens from multiple sources to one repository, extract them in any structure using our SDK, GitHub integration, or CLI. We got you covered once you want to scale.
                </p>
            </div>
            <div class="service_item">
                <h4>Stay flexible</h4>
                <p>
                    Sync tokens from multiple sources to one repository, extract them in any structure using our SDK, GitHub integration, or CLI. We got you covered once you want to scale.
                </p>
            </div>
            <div class="service_item">
                <h4>Stay flexible</h4>
                <p>
                    Sync tokens from multiple sources to one repository, extract them in any structure using our SDK, GitHub integration, or CLI. We got you covered once you want to scale.
                </p>
            </div>
            <div class="service_item">
                <h4>Stay flexible</h4>
                <p>
                    Sync tokens from multiple sources to one repository, extract them in any structure using our SDK, GitHub integration, or CLI. We got you covered once you want to scale.
                </p>
            </div>
        </div>

	</div>
		`

	linkParent(parent, elm)
}

export default Service
