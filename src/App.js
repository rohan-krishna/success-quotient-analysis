import React, { useContext, createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Router } from "@reach/router";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
	FirebaseAuthConsumer,
	FirebaseAuthProvider
} from "@react-firebase/auth";
import ProfilePage from './components/ProfilePage';
import Index from './components/Index';
import { propTypes } from 'react-bootstrap/esm/Image';

var config = {
    apiKey: "AIzaSyDlN5WY7D_TTFKSScE1Xtw9T02dBZZjQPQ",
    authDomain: "miracle-journal.firebaseapp.com",
    databaseURL: "https://miracle-journal.firebaseio.com",
    projectId: "miracle-journal",
    storageBucket: "miracle-journal.appspot.com",
    messagingSenderId: "434153739772",
    appId: "1:434153739772:web:122d66c9ce5142ad6fce79",
    measurementId: "G-TMELKE8C33"
};

function App() {

	return (
		<FirebaseAuthProvider {...config} firebase={firebase}>
				<div className="container pt-3">
					
					<FirebaseAuthConsumer>
						
						{({ isSignedIn, user, providerId }) => {

							if(isSignedIn) {
								return (
									<Router>
										{/* <ProfilePage user={user} /> */}
										<Index path="/" firebase={firebase} />
										<ProfilePage path="profilePage" user={user} />
									</Router>
								);
							} else {
								return (
									<button
										onClick={() => {
											const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
											firebase.auth().signInWithPopup(googleAuthProvider);
										}}
										className="btn btn-sm btn-success"
									>
										Sign In with Google
									</button>)
							}
						}}
					</FirebaseAuthConsumer>
				</div>
		</FirebaseAuthProvider>
	);
}
	
export default App;
	