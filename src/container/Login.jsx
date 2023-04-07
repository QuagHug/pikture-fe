import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode"
import "./Login.css"

const Login = () => {
	const [ user, setUser ] = useState({});
	const navigate = useNavigate();
	
	function handleCallbackResponse(response) {
		const userObject = jwt_decode(response.credential);
		console.log(userObject.email);
		setUser(userObject);
		sessionStorage.setItem("userObject", JSON.stringify(userObject));
		navigate("/");
	}

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id: "1089165962212-gf811ifqpnbtcpepcfni1v4vn3p14tlp.apps.googleusercontent.com",
			callback: handleCallbackResponse
		});

		google.accounts.id.renderButton(
			document.getElementById("signInDiv"),
			{ theme: "outline", size: "large" }
		);
	}, [])

	return (
		<div className="Login">
			<div id="signInContainer">
				<img src={require("../img/Pikture.png")} alt="" width="250px" height="250px" id="signInLogo"/>
				<div id="signInDiv"></div>
			</div>
		</div>
	);
}

export default Login