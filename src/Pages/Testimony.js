import { linkParent } from '../helper'

function Testimony(parent) {
	const users = [
		{
			name: 'Roy Vab Rooijen',
			role: 'Graphics Designer',
			imgUrl: 'src/assets/users/u_1.jpg',
			message: `The automation from design to code with Specify is incredibly powerful. The ability to reference the same tokens and assets in Figma — and in our codebase — saves us an incredible amount of time, while reducing manual, error-prone work.`,
		},
		{
			name: 'Jane Doe',
			role: 'UI/UX Designer',
			imgUrl: 'src/assets/users/u_2.jpg',
			message: `Specify is the missing link between our design and engineering teams. It definitely helped us integrate design tokens in an automated way very quickly and seamlessly into our codebase.`,
		},
		{
			name: 'John Smith',
			role: 'Frontend Developer',
			imgUrl: 'src/assets/users/u_3.jpg',
			message: `We sync our design tokens and icons to our tools with Specify, and it gives our design and engineering teams peace of mind!`,
		},
		{
			name: 'Alice Johnson',
			role: 'Product Manager',
			imgUrl: 'src/assets/users/u_4.jpg',
			message: `The automation from design to code with Specify is incredibly powerful. The ability to reference the same tokens and assets in Figma — and in our codebase — saves us an incredible amount of time, while reducing manual, error-prone work.`,
		},
		{
			name: 'Bob Brown',
			role: 'Backend Developer',
			imgUrl: 'src/assets/users/u_5.jpg',
			message: `Specify helps our designers keep their assets and design decisions in sync with the actual code, avoiding extra development effort and making design implementation much more flexible.`,
		},
		{
			name: 'Charlie Davis',
			role: 'Full Stack Developer',
			imgUrl: 'src/assets/users/u_3.jpg',
			message: `Specify is the perfect addition to our front-end boilerplate. Tokens, assets, fonts: everything comes straight out from Figma. Less configuration, more creative development. Our team loves it!`,
		},
	]

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
           <div class="testimony_box-list">
		 		 ${users.map((user, index) => Card(user, index)).join('')}  
		   </div>
			  
        </div>
    </div>
    `

	linkParent(parent, elm)
}

function Card(user, index) {
	const numCard = 6
	const delayDivision = (60 / numCard).toFixed(0)

	const elm = `
        <div style="animation-delay: -${
			delayDivision * index + 1
		}s"  class="testimony_box">
            
			<div class="testimony_logo">
                <div class="logo">
					<img src="src/assets/icons/s-${index + 1}.svg" alt="companies logo" />
				</div>
            </div>

            <p class="testimony_message">
                "${user.message}"
            </p>

            <div class="testimony_image">
                <div class="testimony_image_wrapper">
                    <img src="${user.imgUrl}" alt="${user.name}" />
                </div>
                <div class="testifier">
                   <p class="testifier_name">${user.name}</p>
                    <p class="testifier_role">${user.role}</p>
                </div>
                
            </div>
         </div>
    `

	return elm
}

export default Testimony
