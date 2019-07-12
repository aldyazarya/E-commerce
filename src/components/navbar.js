import React, {Component} from 'react'
import {connect} from 'react-redux'
import {onLogoutUser} from '../action/index'
import {Link, Redirect} from 'react-router-dom'
// import logo from ''


class Navbar extends Component {
    render(){
		const {user} = this.props

		if(user.username === ''){
			return(
				<div>
					<header class="header_area sticky-header">
						<div class="main_menu">
							<nav class="navbar navbar-expand-lg navbar-light main_box">
								<div class="container">
									{/* <!-- Brand and toggle get grouped for better mobile display --> */}
									<a class="navbar-brand logo_h" href="index.html"><img src="img/logo1.png" alt="" width="130px" height="40px"/></a>
									<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
									 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
									{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
									<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
										<ul class="nav navbar-nav menu_nav ml-auto">
											<li class="nav-item active">
												<Link to="/">
													<a class="nav-link" href="">Home</a>
												</Link>
											</li>
											<li class="nav-item submenu dropdown">
												<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
												 aria-expanded="false">Shop</a>
												<ul class="dropdown-menu">
													<li class="nav-item"><a class="nav-link" href="category.html">Shop Category</a></li>
													<li class="nav-item"><a class="nav-link" href="single-product.html">Product Details</a></li>
													<li class="nav-item"><a class="nav-link" href="checkout.html">Product Checkout</a></li>
													<li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
													<li class="nav-item"><a class="nav-link" href="confirmation.html">Confirmation</a></li>
												</ul>
											</li>
											<li class="nav-item submenu dropdown">
												<Link to="/login">
													<a href="" class="nav-link dropdown-toggle">Login</a>
												</Link>
												
											</li>
											<li class="nav-item submenu dropdown">
												<Link to="/register">
													<a href="" class="nav-link dropdown-toggle">Register</a>
												</Link>
											</li>
											{/* <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li> */}
										</ul>
										<ul class="nav navbar-nav navbar-right">
											<li class="nav-item">
												<button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
											</li>
										</ul>
	
									</div>
								</div>
							</nav>
						</div>
						<div class="search_input" id="search_input_box">
							<div class="container">
								<form class="d-flex justify-content-between">
									<input type="text" class="form-control" id="search_input" placeholder="Search Here"/>
									<button type="submit" class="btn"></button>
									<span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
								</form>
							</div>
						</div>	
					</header>
					
				</div>
				
			)

		} else {
			return(
				<div>
					<header class="header_area sticky-header">
						<div class="main_menu">
							<nav class="navbar navbar-expand-lg navbar-light main_box">
								<div class="container">
									{/* <!-- Brand and toggle get grouped for better mobile display --> */}
									<a class="navbar-brand logo_h" href="index.html"><img src="img/logo1.png" alt="" width="130px" height="40px"/></a>
									<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
									 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
									{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
									<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
										<ul class="nav navbar-nav menu_nav ml-auto">
											<li class="nav-item active">
												<Link to="/">
													<a class="nav-link" href="index.html">Home</a>
												</Link>
											</li>
											<li class="nav-item submenu dropdown">
												<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
												 aria-expanded="false">Shop</a>
												<ul class="dropdown-menu">
													<li class="nav-item"><a class="nav-link" href="category.html">Shop Category</a></li>
													<li class="nav-item"><a class="nav-link" href="single-product.html">Product Details</a></li>
													<li class="nav-item"><a class="nav-link" href="checkout.html">Product Checkout</a></li>
													<li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
													<li class="nav-item"><a class="nav-link" href="confirmation.html">Confirmation</a></li>
												</ul>
											</li>
											<li class="nav-item submenu dropdown">
												<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
												 aria-expanded="false"><span class=" ti-user"></span> {user.username}</a>
												<ul class="dropdown-menu">
													<li class="nav-item"><a class="nav-link" href="">Profile</a></li>
													<li class="nav-item"><a class="nav-link" href="" onClick={this.props.onLogoutUser}>Log out</a></li>
												</ul>
											</li>

											{/* <li class="nav-item submenu dropdown">
												<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
												 aria-expanded="false">Register</a>
												<ul class="dropdown-menu">
													<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
													<li class="nav-item"><a class="nav-link" href="tracking.html">Tracking</a></li>
													<li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
												</ul>
											</li> */}
											{/* <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li> */}
										</ul>
										<ul class="nav navbar-nav navbar-right">
											<li class="nav-item"><a href="#" class="cart"><span class="ti-bag"></span></a></li>
											<li class="nav-item">
												<button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
											</li>
										</ul>
									</div>
								</div>
							</nav>
						</div>
						<div class="search_input" id="search_input_box">
							<div class="container">
								<form class="d-flex justify-content-between">
									<input type="text" class="form-control" id="search_input" placeholder="Search Here"/>
									<button type="submit" class="btn"></button>
									<span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
								</form>
							</div>
						</div>
					</header>
				</div>
				
			)
		}
    }
}

const mapStateToProps = state => {
    return {user : state.auth}
}

export default connect (mapStateToProps, {onLogoutUser}) (Navbar);