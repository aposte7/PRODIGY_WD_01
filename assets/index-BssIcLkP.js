(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();function r(e,t,o="innerHTML"){const a=typeof e=="string"?document.querySelector(e):e,s={innerHTML:()=>a.innerHTML=t,append:()=>a.insertAdjacentHTML("beforeend",t),prepend:()=>a.insertAdjacentHTML("afterbegin",t),before:()=>a.insertAdjacentHTML("beforebegin",t),after:()=>a.insertAdjacentHTML("afterend",t)};let i={status:"not-started",message:""};if(!a)return{...i,status:"error",message:"Parent element not found"};try{if(!s[o])throw new Error("Invalid method specified");return s[o](),{...i,status:"completed",message:`HTML inserted successfully using method: ${o}`}}catch(n){return console.log(`error occurred while adding children to ${e}`),{...i,status:"error",message:n.message||"Failed to insert HTML"}}}function c(e){r(e,`    
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

    `)}function u(e){const t=` 
		<div class="nav_list">
			${l("Home")}
			${l("Solution")}
			${l("Resource")}
			${l("About")}
		</div>`;r(e,t),document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".nav_item");o.forEach(a=>{a.addEventListener("click",function(){o.forEach(s=>s.classList.remove("nav_active")),this.classList.add("nav_active")})})})}function l(e,t="#"){return`
	<div class="nav_item">
		<a class="nav_link" href=${t}>
			${e}
		</a>
	</div>`}function d(e){const o=4.615384615384615,a=`
        <div class="nav_bar">
            <a href="#" class="nav_logo">
                <img  src="assets/icons/logo.svg" alt="Logo">
            </a>

            <div id="nav_container"></div>
            
            <div class="nav_action">
                <a href="#" class="nav_link-btn btn ">Sign In</a>
                <button class="menu_btn" data-toggle-menu>
                    <span class="menu_bar"></span>
                </button>
            </div>
        </div>

        <div class="hero_wrapper">
            <div class="hero">
                <div class="hero_text">
                    <h1 class="hero_text-main">
                        Your Design Token Engine
                    </h1>

                    <p class="hero_text-sub">
                        <span>
                            Flexible and powerful, Specify makes it easy to build the exact 
                        </span>
                        <span>
                            Design Token workflow your Design System needs.
                        </span>
                    </p>
                </div>

                <div class="hero_video-wrapper">
                    <video autoplay loop muted class="hero_video">
                        <source src="assets/hero_video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
        <div class="supporter">
            <div class="supporter_wrapper">
            <p class="supporter_text">Specified by Love</p>
            
            ${Array.from({length:13},(s,i)=>`
                    <div style="animation-delay: -${o*i+1}s" 
                    
                    data-image-index="${i+1}" 
                    class="supporter_img-container">
                        <img class="supporter_img" src="assets/icons/s-${i+1}.svg" alt="" />
                    </div>
                `).join("")}

            </div>
        </div>
`;r(e,a),u("#nav_container")}function p(e){r(e,`
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
		`)}function v(e){r(e,`
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
							<source src="assets/showcase.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>
				</div>

			</div>
		</div>
	</div>
		`)}function g(e){const o=`
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
           <div class="testimony_box-list">
		 		 ${[{name:"Roy Vab Rooijen",role:"Graphics Designer",imgUrl:"assets/users/u_1.jpg",message:"The automation from design to code with Specify is incredibly powerful. The ability to reference the same tokens and assets in Figma — and in our codebase — saves us an incredible amount of time, while reducing manual, error-prone work."},{name:"Jane Doe",role:"UI/UX Designer",imgUrl:"assets/users/u_2.jpg",message:"Specify is the missing link between our design and engineering teams. It definitely helped us integrate design tokens in an automated way very quickly and seamlessly into our codebase."},{name:"John Smith",role:"Frontend Developer",imgUrl:"assets/users/u_3.jpg",message:"We sync our design tokens and icons to our tools with Specify, and it gives our design and engineering teams peace of mind!"},{name:"Alice Johnson",role:"Product Manager",imgUrl:"assets/users/u_4.jpg",message:"The automation from design to code with Specify is incredibly powerful. The ability to reference the same tokens and assets in Figma — and in our codebase — saves us an incredible amount of time, while reducing manual, error-prone work."},{name:"Bob Brown",role:"Backend Developer",imgUrl:"assets/users/u_5.jpg",message:"Specify helps our designers keep their assets and design decisions in sync with the actual code, avoiding extra development effort and making design implementation much more flexible."},{name:"Charlie Davis",role:"Full Stack Developer",imgUrl:"assets/users/u_3.jpg",message:"Specify is the perfect addition to our front-end boilerplate. Tokens, assets, fonts: everything comes straight out from Figma. Less configuration, more creative development. Our team loves it!"}].map((a,s)=>m(a,s)).join("")}  
		   </div>
			  
        </div>
    </div>
    `;r(e,o)}function m(e,t){return`
        <div style="animation-delay: -${10 .toFixed(0)*t+1}s"  class="testimony_box">
            
			<div class="testimony_logo">
                <div class="logo">
					<img src="assets/icons/s-${t+1}.svg" alt="companies logo" />
				</div>
            </div>

            <p class="testimony_message">
                "${e.message}"
            </p>

            <div class="testimony_image">
                <div class="testimony_image_wrapper">
                    <img src="${e.imgUrl}" alt="${e.name}" />
                </div>
                <div class="testifier">
                   <p class="testifier_name">${e.name}</p>
                    <p class="testifier_role">${e.role}</p>
                </div>
                
            </div>
         </div>
    `}function h(e){r(e,`
    <div>
        <header class="header"></header>

    <main class="main">
        <section class="showcase"></section>
        <section class="service"></section>
        <section class="testimony"></section>
    </main>

    <footer class="footer"></footer>

    </div>

  `),d(".header"),v(".showcase"),p(".service"),g(".testimony"),c(".footer")}document.querySelector("#app").innerHTML=`
  <div id="page">
    
  </div>
`;h("#page");const f=()=>{document.querySelector("[data-toggle-menu]").addEventListener("click",()=>{document.querySelector("#nav_container").classList.toggle("active"),document.querySelector(".menu_btn").classList.toggle("active")})};f();
