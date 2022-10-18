import React from 'react'
import Card from 'react-bootstrap/Card';
import './product.css'

export const Product = ({name, description, price, image}) => {
	return (
		<Card style={{ width: '18rem' }} className="mt-2 mb-2 text-center product">
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					{description}
				</Card.Text>
				<div>
					{price}
				</div>
			</Card.Body>
		</Card>
	)
}
