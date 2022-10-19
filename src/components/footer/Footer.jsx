import React from 'react'

export const Footer = () => {
	return (
		<div className="bg-dark text-light">
			<div className="container">
				<footer className="py-5">
					<div className="row">
						<div className="col-6 col-md-2 mb-3">
							<h5>Quick Access</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
							</ul>
						</div>

						<div className="col-6 col-md-2 mb-3">
							<h5>Policies</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Return Policy</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">After Sale</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">VIP</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Luxury</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Legal</a></li>
							</ul>
						</div>

						<div className="col-6 col-md-2 mb-3">
							<h5>Products</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Faucets</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Washbasin</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Bathhub</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Bidet</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Toilet Seats</a></li>
							</ul>
						</div>

						<div className="col-md-5 offset-md-1 mb-3">
							<form>
								<h5>Subscribe to our newsletter</h5>
								<p>Monthly digest of what's new and exciting from us.</p>
								<div className="d-flex flex-column flex-sm-row w-100 gap-2">
									<label htmlFor="newsletter1" className="visually-hidden">Email address</label>
									<input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
									<button className="btn btn-primary" type="button">Subscribe</button>
								</div>
							</form>
						</div>
					</div>

					<div className="d-flex flex-column flex-sm-row justify-content-around py-4 my-4 border-top">
						<div>
						<img src="./assets/global/logo.png" width="150px" alt="IStandard Logo" style={{backgroundColor: '#fff'}} />
						<p>© 2022 IStandard, Inc. All rights reserved.</p>
						</div>
						<ul className="list-unstyled d-flex">
							<li>Follow Us!</li>
							<li className="ms-3"><a className="link-dark" href="/"><img src="./assets/partners/twitter-logo.png" alt="Follow us on Twitter" style={{width:'30px', borderRadius: '3px'}} title='Follow us on Twitter'/></a></li>
							<li className="ms-3"><a className="link-dark" href="/"><img src="./assets/partners/instagram-logo.png" alt="Follow us on Instagram" style={{width:'30px', borderRadius: '3px'}} title="Follow us on Instagram"/></a></li>
							<li className="ms-3"><a className="link-dark" href="/"><img src="./assets/partners/facebook-logo.png" alt="Follow us on Facebook" style={{width:'30px', borderRadius: '3px'}} title="Follow us on Facecbook"/></a></li>
						</ul>
					</div>
				</footer>
			</div>
		</div>
	)
}
