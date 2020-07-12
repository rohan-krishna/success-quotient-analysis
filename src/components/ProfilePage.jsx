import React from "react";
import {
	FirebaseAuthConsumer,
	FirebaseAuthProvider
} from "@react-firebase/auth";


const ProfilePage = (props) => {

    const { user } = props;

    console.log(user)

    return (
        <div className="row">
            <pre>{JSON.stringify(user)}</pre>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <img src={user.photoURL} className="img-thumbnail" width="128" />
                        <h3 className="mt-3">{user.displayName}</h3>
                        <p className="text-muted">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;
