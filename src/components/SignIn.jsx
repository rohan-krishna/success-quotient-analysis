import React, {useState, useEffect, useRef, useContext} from "react";
import { Link } from "@reach/router";
import '../css/firebase.css';
import { UserContext } from "../App";

let firebase = require('firebase');
var firebaseui = require('firebaseui');

var firebaseConfig = {
    apiKey: "AIzaSyDlN5WY7D_TTFKSScE1Xtw9T02dBZZjQPQ",
    authDomain: "miracle-journal.firebaseapp.com",
    databaseURL: "https://miracle-journal.firebaseio.com",
    projectId: "miracle-journal",
    storageBucket: "miracle-journal.appspot.com",
    messagingSenderId: "434153739772",
    appId: "1:434153739772:web:122d66c9ce5142ad6fce79",
    measurementId: "G-TMELKE8C33"
};

firebase.initializeApp(firebaseConfig);

const SignIn = () => {

	const widgetRef = useRef(null);

	const { user, updateUser } = useContext(UserContext);

	useEffect( () => {
		
		let ui = new firebaseui.auth.AuthUI(firebase.auth());

		ui.start(widgetRef.current, {
			signInSuccessUrl: '',
			callbacks: {
				signInSuccessWithAuthResult: function(authResult, redirectUrl) {
					// User successfully signed in.
					// Return type determines whether we continue the redirect automatically
					// or whether we leave that to developer to handle.
					updateUser("hello")
					return false;
				},
			},
			signInFlow: 'popup',
			signInOptions: [
				// firebase.auth.EmailAuthProvider.PROVIDER_ID,
				firebase.auth.GoogleAuthProvider.PROVIDER_ID
			]
		})
	}, []);

	return (
		<div className="container">
			<h3 className="text-center mb-3">Success Quotient Analysis</h3>
			<div id="firebase-ui-auth-container" ref={widgetRef}></div>
		</div>
	)
}

export default SignIn;