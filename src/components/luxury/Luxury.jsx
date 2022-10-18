import React from 'react'
import { Button, Card } from 'react-bootstrap';


export const Luxury = () => {
	return (
		<>
			<h1 className="h2 text-center mt-5">Luxury Product Store</h1>
			<div className="container mt-5 d-flex justify-content-around">
				<iframe title="Luxury Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8212.631121654314!2d10.395230277053617!3d50.95746792030446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a483434151a79f%3A0xa8cab484ed027802!2sInns%20%22Bamberger%20Hof%22!5e0!3m2!1sar!2seg!4v1666108475298!5m2!1sar!2seg" width="400" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				<div>
					<Card className="text-center">
						<Card.Body>
							<Card.Title>Special Luxury Products</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Doloremque molestias,
								ex quo ipsa impedit aut dolores<br />dolore cupiditate doloribus repellat!
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</>
	)
}
