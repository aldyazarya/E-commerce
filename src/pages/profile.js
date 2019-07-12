import React, {Component} from 'react'
import axios from 'axios'
import {API_URL} from '../API_URL/API_URL'
import cookies from 'universal-cookie'
import {Link} from 'react-router-dom'
import {Button, ButtonGroup} from 'reactstrap'
import Swal from 'sweetalert2'

const cookie = new cookies()

class Profile extends Component {
    constructor(props){
        super(props);
         this.state = {
            username: '',
			name: '',
			dateofbirth: '',
			gender: '',
			email: '',
			phonenumber: '',
			country: '',
			city: '',
			postalcode: '',
			address: '',
			avatar: ''
          }
        
    };

    async componentDidMount(){
		const res = await axios.get(`${API_URL}/users/${cookie.get('masihLogin')}`)
		console.log(res.data[0]);

		this.setState({
			username: res.data[0].username,
			name: res.data[0].name,
			dateofbirth: res.data[0].dateofbirth,
			gender: res.data[0].gender,
			email: res.data[0].email,
			phonenumber: res.data[0].phonenumber,
			country: res.data[0].country,
			city: res.data[0].cityordistrict,
			postalcode: res.data[0].postalcode,
			address: res.data[0].address,
			avatar: res.data[0].avatar
		})

		console.log(this.state);
	}
    
    
	

	

    render(){
		
        return(
            <div>
                <section className="banner-area organic-breadcrumb">
					<div className="container">
						<div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
							<div className="col-first">
								<h1>Profile</h1>
								<nav className="d-flex align-items-center">
									<Link to="/">
										<a href="">Home<span className="lnr lnr-arrow-right"></span></a>
									</Link>
									<Link to="/profile">
										<a href="">Profile</a>
									</Link>
								</nav>
							</div>
						</div>
					</div>
				</section>
                <section className="login_box_area section_gap" style={{paddingTop:"0px"}}>
						<div className="container">
							<div className="row" style={{paddingRight:"250px", paddingLeft:"250px"}}>
								{/* <div className="col-lg-6">
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
								</div> */}
								<div className="col-lg-12">
									<div className=" typography" style={{paddingTop:"50px", paddingBottom:"50px", width:"fitContent"}}>
										<h2 style={{color:"black", width:"fit-content"}} className="mx-auto"> Profile</h2>
                                        <div className="d-flex">
                                            <div style={{ textAlign:"left", marginTop:"30px"}} className="col-lg-6">
                                                <h4 style={{color:"#ffba00", paddingTop:"10px", paddingBottom:"10px"}}>PERSONAl INFORMATION</h4>
                                                <h4>{this.state.name}</h4>
                                                <h4>{this.state.dateofbirth}</h4>
                                                <h4>{this.state.gender}</h4>
                                                <h4 style={{color:"#ffba00", paddingTop:"10px", paddingBottom:"10px"}}>CONTACT</h4>
                                                <h4>{this.state.email}</h4>
                                                <h4>{this.state.phonenumber}</h4>
                                                <h4 style={{color:"#ffba00", paddingTop:"10px", paddingBottom:"10px"}}>ADDRESS</h4>
                                                <h4>{this.state.country}</h4>
                                                <h4>{this.state.city}</h4>
                                                <h4>{this.state.postalcode}</h4>
                                                <h4>{this.state.address}</h4>
                                            </div>
                                            <div style={{paddingLeft:"10px", textAlign:"left", marginTop:"30px"}} className="col-lg-6">
                                                <div className="mx-auto" style={{width:"fit-content"}}>
                                                    <img src={`${API_URL}/avatar/${this.state.avatar}`} alt={this.state.username}  className="profile-picture" width="250px" style={{borderRadius:"75%"}}/>
                                                </div>
                                                <div className="mx-auto" style={{width:"fit-content", marginTop:"30px"}}>
                                                    <button class="genric-btn info circle">Edit Profile</button>
                                                </div>
                                            </div>
                                        </div>
									</div>
								</div>
							</div>
						</div>
					</section>
            </div>
        )
    }
}

export default Profile;