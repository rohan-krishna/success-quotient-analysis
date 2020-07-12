import React, { useState } from "react";
import SQA from "./SQA";
import { FirestoreCollection, FirestoreProvider } from "@react-firebase/firestore"
import * as firebase from "firebase";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyDlN5WY7D_TTFKSScE1Xtw9T02dBZZjQPQ",
    projectId: "miracle-journal",
    databaseURL: "https://miracle-journal.firebaseio.com",
    authDomain: "miracle-journal.firebaseapp.com",
    // OPTIONAL
    storageBucket: "miracle-journal.appspot.com",
    messagingSenderId: "434153739772"
};

const SQAList = (props) => { 

    const [ sqaArray, setSqaArray ] = useState([]);

    return (
        <>
            <h5>Listing All SQAs</h5>
            <SQA />
            <strong>Testing Firebase Collection</strong>
            <FirestoreProvider firebase={firebase} config={config}>
                <FirestoreCollection path="/helloworld/">
                {d => {
                    console.log(d)
                    return d.isLoading ? "Loading" : <pre>{d.value[0].name}</pre>; 
                }}
                </FirestoreCollection>
            </FirestoreProvider>
        </>
    )
}

export default SQAList;