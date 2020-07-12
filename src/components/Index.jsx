import React from "react";
import SQAList from "./SQAList";

const Index = (props) => {

    const { firebase } = props;

    return (
        <div className="container">
            <h2>Success Quotient Analysis</h2>
            <button
                onClick={() => {
                    firebase.auth().signOut();
                }}
                className="btn btn-sm btn-danger"
                >
                Sign Out
            </button>

            <hr/>
            
            <SQAList />
        </div>
    );
}

export default Index;