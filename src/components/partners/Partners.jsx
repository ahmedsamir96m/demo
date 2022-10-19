import React, { useState } from 'react'

export const Partners = () => {
	const [partners, setPartners] = useState([
		{
			title: 'Apple',
			image: 'assets/partners/apple-logo.png'
		},
		{
			title: 'AT & T',
			image: 'assets/partners/att-logo.png'
		},
		{
			title: 'Budweiser',
			image: 'assets/partners/budweiser-logo.png'
		},
		{
			title: 'Coca Cola',
			image: 'assets/partners/coca-cola-logo.png'
		},
		{
			title: 'Facecbook',
			image: 'assets/partners/facebook-logo.png'
		},
		{
			title: 'GE',
			image: 'assets/partners/ge-logo.png'
		},
		{
			title: 'Google',
			image: 'assets/partners/google-logo.png'
		},
		{
			title: 'IBM',
			image: 'assets/partners/ibm-logo.png'
		},
		{
			title: 'Intel',
			image: 'assets/partners/intel-logo.png'
		},
		{
			title: 'Louis Vuitton',
			image: 'assets/partners/louis-vuitton-logo.png'
		},
		{
			title: 'McDonalds',
			image: 'assets/partners/mcdonalds-logo.png'
		},
		{
			title: 'Mercedes Benz',
			image: 'assets/partners/mercedes-benz-logo.png'
		},
		{
			title: 'Microsoft',
			image: 'assets/partners/microsoft-logo.png'
		},
		{
			title: 'Toyota',
			image: 'assets/partners/toyota-logo.png'
		},
		{
			title: 'VISA',
			image: 'assets/partners/visa-logo.png'
		},
	])
	
	return (
		<div className='mt-5'>
			<h1 className="h2 text-center">Our Partners</h1>
			<div className="container d-flex justify-content-around flex-wrap">
				{
					partners.map(partner => {
						return <div className="mt-5 mr-5" style={{maxWidth: "150px", margin: '25px'}}>
							<img src={partner.image} alt={`${partner.title} Logo`} className="w-100"/>
						</div>
					})
				}
			</div>
		</div>
	)
}