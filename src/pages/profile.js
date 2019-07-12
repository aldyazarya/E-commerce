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
            rSelected: [],
            file: '',
            imagePreviewUrl: '',
            image_product: '',
            email: '',
            username: '',
            id: ''
          }
        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    };
    onRadioBtnClick = (rSelected) => {
        this.setState({rSelected})

        console.log(rSelected); 
    }

    onChange1(event){
        this.setState({
            categoryValue: event.target.value,
     })
    }
    
    onChange2(event){
        this.setState({
            subcategoryValue: event.target.value
        })
    }
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }
    _handleImageChange(e) {
        e.preventDefault();
        
        let reader = new FileReader();
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            this.setState({
            file: file,
            imagePreviewUrl: reader.result
        });
    }
    
    reader.readAsDataURL(file)
	}
	
	async componentDidMount(){
		const res = await axios.get(`${API_URL}/getlastuser/`)
		console.log(res);

		this.setState({
			email: res.data[0].email,
			username: res.data[0].username,
			id: res.data[0].id
		})
		
	}

	onCreateProfileAvatar = async (e) => {
        const avatar = this.image.files[0]
        try{
            const formData2 = new FormData()
        formData2.append('avatar', avatar)
        //penggunan formdata hanya ketika kita mengupdate data yng ada bentuk file
        //kalau hanya string biasa langsung di tembak aja dalam bentuk object


        const res2 = await axios.patch(`${API_URL}/users/createprofile/avatar/${cookie.get('usernameLogin')}`, formData2, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        
            // cookie.remove('emailLogin')
            // cookie.remove('usernameLogin')
            // cookie.remove('idLogin')
            
            

        } catch(e) {
            console.log(e);
            
        }
          
	}
	
	onCreateProfile = async (e)=> {
		const name = this.name.value
		const dateofbirth = this.dateofbirth.value
		const gender = this.state.rSelected
		const phonenumber = this.phonenumber.value 
		const country = this.country.value
		const cityordistrict = this.cityordistrict.value
		const postalcode = parseInt(this.postalcode.value)
		const address = this.address.value
		
			const res =  await axios.patch(`${API_URL}/users/createprofile/${cookie.get('idLogin')}`, {
				name,
				dateofbirth,
				gender,
				phonenumber,
				country,
				cityordistrict,
				postalcode,
				address
			})
			console.log(res);
	}

	onSubmitProfile = (e) => {
		this.onCreateProfile()
		this.onCreateProfileAvatar()

		Swal.fire({
			position: 'center',
			type: 'success',
			title: 'Your Profile Has Been Created',
			showConfirmButton: false,
		  }).then (
			  setTimeout(function(){
				  window.location.replace('/login')
			  }, 3000)
		  )
	}


    render(){
		let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} width="250px" height="250px"/>);
        }
        return(
            <div>
                <section className="banner-area organic-breadcrumb">
					<div className="container">
						<div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
							<div className="col-first">
								<h1>Create Profile</h1>
								<nav className="d-flex align-items-center">
									<Link to="/">
										<a href="">Home<span className="lnr lnr-arrow-right"></span></a>
									</Link>
									<Link to="/createprofile">
										<a href="">create profile</a>
									</Link>
								</nav>
							</div>
						</div>
					</div>
				</section>
                <section className="login_box_area section_gap">
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
									<div className="login_form_inner">
										<h3>Create Profile</h3>
										<form className="row login_form">
											<div className="col-md-12 form-group">
												<input value={this.state.username} type="teks" className="form-control" id="username" name="username" placeholder="Username" disabled />
											</div>
											<div className="col-md-12 form-group">
												<input ref={input => {this.name= input}} type="text" className="form-control" placeholder="Name" />
											</div>
											<div className="col-md-12 form-group">
												<input value={this.state.email} type="teks" className="form-control" id="email" name="email" placeholder="Email" disabled />
											</div>
											<div className="col-md-12 form-group">
												<input ref={input => {this.dateofbirth= input}} type="date" className="form-control" id="dateofbirth" name="dateofbirth" placeholder="Date of Birth" />
											</div>
											<div className="col-md-12 form-group" style={{width:"fit-content", paddingLeft:"0px", paddingRight:"240px"}}>
                                                <ButtonGroup>
                                                    <Button onClick={() => this.onRadioBtnClick("male")} active={this.state.rSelected === "male"} name="gender" value="male" label="male" size="sm">Male</Button>
                                                    <Button onClick={() => this.onRadioBtnClick("female")} active={this.state.rSelected === "female"} name="gender" value="female" label="female" size="sm">Female</Button>
                                                </ButtonGroup>
											</div>
											<div className="col-md-12 form-group">
												<input ref={input => {this.phonenumber= input}} type="teks" className="form-control" id="phonenumber" name="phonenumber" placeholder="Phone Number" />
											</div>
											<div className="col-md-12 form-group">
												<input ref={input => {this.country= input}} type="teks" className="form-control" id="country" name="country" placeholder="Country" />
											</div>
											<div className="col-md-12 form-group">
												<input ref={input => {this.cityordistrict= input}} type="teks" className="form-control" id="cityordistrict" name="cityordistrict" placeholder="City or District" />
											</div>
											<div className="col-md-12 form-group">
												<input ref={input => {this.postalcode= input}} type="teks" className="form-control" id="postalcode" name="postalcode" placeholder="Postal Code" />
											</div>
											<div className="col-md-12 form-group">
												<input ref={input => {this.address= input}} type="teks" className="form-control" id="address" name="address" placeholder="Address" />
											</div>
											<div className="col-md-12">
												<div style={{paddingRight:"100px"}}>
                                    			    <div>
                                    			        <form onSubmit={this._handleSubmit}>
                                    			            <input type="file" onChange={this._handleImageChange} ref={input => this.image = input} />
                                    			            {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
                                    			        </form>
                                    			    </div>
                                    			    <div className="showAvatar">
                                    			        {$imagePreview}
                                    			    </div>
                                    			</div>		
											</div>



										</form>
												<button className="primary-btn" style={{marginTop:"50px", marginBottom:"50px"}} onClick={this.onSubmitProfile}>Create Profile</button>
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