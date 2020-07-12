import React, {useState} from "react";
import { Link } from "@reach/router";

const SignUp = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ displayName, setDisplayName ] = useState("");
    const [error, setError] = useState(null);


    const signUpWithEmailAndPasswordHandler = ( event, email, password ) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
        setDisplayName("");
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword') {
            setPassword(value);
        } else if (name === 'displayName') {
            setDisplayName(value)
        }
    };

  return (
    <div className="card">
        <div className="card-header">
            <h1 className="header">Sign Up</h1>
        </div>
		<div className="card-body">
	        
			{error !== null && <div className = "alert alert-danger">{error}</div>}

			<form>
                <div className="form-group">
                    <label htmlFor="">Display Name: </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="displayName"
                        value={displayName}
                        placeholder="John Doe"
                        id="displayName"
                        onChange={event => onChangeHandler(event)}
                    />
                </div>
				<div className="form-group">
					<label htmlFor="userEmail">
						Email:
					</label>
					<input
						type="email"
						className="form-control"
						name="userEmail"
						value = {email}
						placeholder="E.g: john.doe@example.com"
						id="userEmail"
						onChange = {(event) => onChangeHandler(event)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="userPassword" className="block">
						Password:
					</label>
					<input
						type="password"
						className="form-control"
						name="userPassword"
						value = {password}
						placeholder="Your Password"
						id="userPassword"
						onChange = {(event) => onChangeHandler(event)}
					/>
				</div>
				<div className="form-group">
					<button className="btn btn-success" onClick = {(event) => {signUpWithEmailAndPasswordHandler(event, email, password)}}>
						Sign Up
					</button>

                    <Link to="/" className="ml-3 btn btn-primary">
                        Sign In here
                    </Link>{" "}

                    <Link to ="passwordReset" className="ml-3">
                        Forgot Password?
                    </Link>
				</div>
			</form>
		</div>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        
        <p className="text-center my-3">or</p>
        
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign In here
          </Link>{" "}
          <br />{" "}
          <Link to ="passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;