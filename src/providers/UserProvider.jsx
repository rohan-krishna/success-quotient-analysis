// import React, { Component, createContext } from "react";
// // import { auth } from "../firebase";


// export const UserContext = React.createContext({ 
//     user: "", 
//     setUser: () => {}
// });

// class UserProvider extends Component {
    
//     state = {
//         user: {},
        
//         this.setUser.bind(this);
//     }

//     setUser = (authResult) => {
//         console.log(authResult);
//     }

//     componentDidMount = () => {
        
//     }

//     render() {
//         return (
//             <UserContext.Provider value={{ 
//                 user: this.state.user,
//                 setUser: this.state.setUser
//              }}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }
// }

// export default UserProvider;