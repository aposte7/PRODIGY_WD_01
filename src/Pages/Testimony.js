import { linkParent } from '../helper'

function Testimony(parent) {
	const elm = `
	<div class="testimony_content">
		<div class="testimony_text">
        <h2 class="testimony_text-header">Trusted by product teams</h2>
        <p class="testimony_text-description">
            <span>
                Book your demo and start automating the distribution of your
            </span>
            <span>
                design — your team will love it.
            </span>
        </p>
        </div>
        <div class="testimony_wrapper">
            <div class="testimony_box">
                <div class="testimony_logo">
                    <img src="src/assets/icons/s-1.svg" alt="" />
                </div>

                <p class="testimony_message">
                    "Specify helps our designers keep their assets and design decisions in sync with the actual code, avoiding extra development effort and making design implementation much more flexible.”
                </p>

                <div class="testimony_image">
                    <div class="testimony_image_wrapper">
                        <img src="" alt="" />
                    </div>

                    <div class="testifier">
                       <p class="testifier_name">Olman Gemechu</p>
                       <p class="testifier_role">FrontEnd Developer</p>
                    </div>
                
                </div>
            </div>
        
        </div>
	</div>
		`

	linkParent(parent, elm)
}

export default Testimony
