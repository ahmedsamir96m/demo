import React, {useState} from 'react'
import { Product } from './Product'
import { Button } from 'react-bootstrap'

export const Products = () => {
	const [products, setProducts] = useState([
		{
			name:'Elegent Faucet',
			description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, repudiandae?',
			image:'./assets/products/product1.jpg',
			price:'120$',
		},
		{
			name:'Mate Metal Faucet',
			description:'Minima dignissimos officia suscipit deleniti! Dolor, at amet consectetur adipisicing?',
			image:'./assets/products/product2.jpg',
			price:'189$',
		},
		{
			name:'Stainless Steel Faucet',
			description:'Nam aspernatur facere facilis odio quibusdam minima itaque quae aperiam',
			image:'./assets/products/product3.jpg',
			price:'210$',
		},
		{
			name:'Kitchen Faucet',
			description:'error minus corrupti maiores ratione. facilis odio quibusdam minima aspernatur',
			image:'./assets/products/product4.jpg',
			price:'149$',
		},
	])
	return (
		<>
			<h1 className="h2 text-center mt-5">Products</h1>
			<div id="products" className="contaier d-flex flex-wrap justify-content-around mt-5">
				{
					products.map((product) => {
						return <Product 
							name={product.name}
							description={product.description}
							image={product.image}
							price={product.price}
							key={Math.random()}
						/>
					})
				}
			</div>
			<div className="text-center">
				<Button variant='dark'>
					More Products
				</Button>
			</div>
		</>
	)
}
