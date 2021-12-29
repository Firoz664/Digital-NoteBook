/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/");

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
             <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="for-pwd"/><label for="tab-2" class="tab">Forgot Password</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Username or Email</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign In"/>
				</div>
				<div class="hr"></div>
			</div>
			<div class="for-pwd-htm">
				<div class="group">
					<label for="user" class="label">Username or Email</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Reset Password"/>
				</div>
				<div class="hr"></div>
			</div>
		</div>
	</div>
</div>
        </div>
   

    )
}

export default Login
