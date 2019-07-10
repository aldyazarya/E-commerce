import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {onLoginClick} from '../action/index'
import {connect} from 'react-redux'
import cookies from 'universal-cookie'

const cookie = new cookies()


class Login extends Component {

	onSubmitClick = () => {
		const username = this.username.value
		const password = this.password.value
		this.props.onLoginClick (username, password)
		console.log(username);
		console.log(password);
		
	}






    render(){
		const {user} = this.props
		if(user.username === "") {
			return(
				<div>
					<section className="banner-area organic-breadcrumb">
						<div className="container">
							<div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
								<div className="col-first">
									<h1>Login</h1>
									<nav className="d-flex align-items-center">
										<Link to="/">
											<a href="">Home<span className="lnr lnr-arrow-right"></span></a>
										</Link>
										<Link to="/login">
											<a href="">Login</a>
										</Link>
									</nav>
								</div>
							</div>
						</div>
					</section>
	
					{/* <!--================Login Box Area =================--> */}
					<section className="login_box_area section_gap">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="login_box_img">
										<img className="img-fluid" src="img/login.jpg" alt=""/>
										<div className="hover">
											<h4>New to our website?</h4>
											<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
											<Link to="/register">
												<a className="primary-btn" href="">Create an Account</a>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="login_form_inner">
										<h3>Log in to enter</h3>
										<form className="row login_form">
											<div className="col-md-12 form-group">
												<input ref={input => {this.username= input}} type="teks" className="form-control" id="name" name="name" placeholder="Username" />
											</div>
											<div className="col-md-12 form-group">
												<input ref={input => {this.password= input}} type="password" className="form-control" id="name" name="name" placeholder="Password"/>
											</div>
											<div className="col-md-12 form-group">
												<div className="creat_account">
													<input type="checkbox" id="f-option2" name="selector"/>
													<label for="f-option2">Keep me logged in</label>
												</div>
											</div>
											<div className="col-md-12 form-group">
												<a href="#">Forgot Password?</a>
											</div>
										</form>
												<button className="primary-btn" onClick={this.onSubmitClick}>Log In</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* <!--================End Login Box Area =================--> */}
				</div>
			)

		} else {
			return <Redirect to="/"/>
		}
    }
}

const mapStateToProps = state => {
	return {user : state.auth}
}

export default connect ( mapStateToProps, {onLoginClick})(Login);