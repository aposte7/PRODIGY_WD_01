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
                    <img src="assets/images/service_box_1.jpg" alt="" />
                </div>
            </div>

            <div class="service_box">
                <div class="service_box-wrapper">
                    <h2 class="service_box-header">
                    Customize outputs
                    </h2>

                    <p class="service_box-description">
                        Specify’s open source parsers help you generate design tokens and assets that match your company standards. 
                    </p>

                    <div class="service_btn">
                        <a href="#" class="btn btn-link">Discover all parsers -> </a>
                    </div>
                </div>

                <div class="service_image service_image-2 flex">
                    <ul style="--t:30s" class="service_tag flex">
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_1.svg" alt="" />
                            <p>to-css-custom-properties</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_2.svg" alt="" />
                            <p>to-flutter</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_3.svg" alt="" />
                            <p>replace-string</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_1.svg" alt="" />
                            <p>to-css-custom-properties</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_2.svg" alt="" />
                            <p>to-flutter</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_3.svg" alt="" />
                            <p>replace-string</p>
                        </li>

                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_2.svg" alt="" />
                            <p>to-flutter</p>
                        </li>
                    </ul>
                    <ul style="--t:20s" class="service_tag flex">
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_1.svg" alt="" />
                            <p>to-css-custom-properties</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_2.svg" alt="" />
                            <p>to-flutter</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_3.svg" alt="" />
                            <p>replace-string</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_1.svg" alt="" />
                            <p>to-css-custom-properties</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_2.svg" alt="" />
                            <p>to-flutter</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_3.svg" alt="" />
                            <p>replace-string</p>
                        </li>

                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_2.svg" alt="" />
                            <p>to-flutter</p>
                        </li>
                    </ul>
                    <ul style="--t:20s" class="service_tag flex">
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_1.svg" alt="" />
                            <p>to-css-custom-properties</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_2.svg" alt="" />
                            <p>to-flutter</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_3.svg" alt="" />
                            <p>replace-string</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_1.svg" alt="" />
                            <p>to-css-custom-properties</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_2.svg" alt="" />
                            <p>to-flutter</p>
                        </li>
                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_3.svg" alt="" />
                            <p>replace-string</p>
                        </li>

                        <li class="flex service_tag_item">
                            <img height="5" width="5" src="assets/outputs/out_2.svg" alt="" />
                            <p>to-flutter</p>
                        </li>
                    </ul>
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
