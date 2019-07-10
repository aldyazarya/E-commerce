import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {onRegister} from '../action/index'


class Register extends Component {


	onRegistertClick = () => {
        const username = this.username.value
        const email = this.email.value
        const pass = this.password.value
        this.props.onRegister(username,email,pass)
	}
	
    render(){
        return(
            <div>
                <section class="banner-area organic-breadcrumb">
	            	<div class="container">
	            		<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
	            			<div class="col-first">
	            				<h1>Register</h1>
	            				<nav class="d-flex align-items-center">
                                    <Link to="/">
	            					    <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                                    </Link>
                                    <Link to="/register">
	            					    <a href="category.html">Register</a>
                                    </Link>
	            				</nav>
	            			</div>
	            		</div>
	            	</div>
	            </section>

                {/* <!--================Login Box Area =================--> */}
	            <section class="login_box_area section_gap">
	            	<div class="container">
	            		<div class="row">
	            			<div class="col-lg-6">
	            				<div class="login_box_img">
	            					<img class="img-fluid" src="img/login.jpg" alt=""/>
	            					<div class="hover">
                                        <h4>Have An Account?</h4>
	            						<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                        <Link to="/login">
	            						    <a class="primary-btn" href="">Login</a>
                                        </Link>
	            					</div>
	            				</div>
	            			</div>
	            			<div class="col-lg-6">
	            				<div class="login_form_inner">
	            					<h3>Register your account</h3>
	            					<form class="row login_form">
	            						<div class="col-md-12 form-group">
	            							<input ref={input => {this.username= input}} type="teks" class="form-control" id="name" name="name" placeholder="Username" />
	            						</div>
	            						<div class="col-md-12 form-group">
	            							<input ref={input => {this.email= input}} type="email" class="form-control" id="name" name="name" placeholder="Email" />
	            						</div>
	            						<div class="col-md-12 form-group">
	            							<input ref={input => {this.password= input}} type="password" class="form-control" id="name" name="name" placeholder="Password" />
	            						</div>
	            						<div class="col-md-12 form-group">
	            							<a href="#">Forgot Password?</a>
	            						</div>
	            					</form>
	            							<button  class="primary-btn" onClick={this.onRegistertClick}>Register</button>
	            				</div>
	            			</div>
	            		</div>
	            	</div>
	            </section>
	            {/* <!--================End Login Box Area =================--> */}
            </div>
        )
    }
}

export default connect (null, {onRegister}) (Register);