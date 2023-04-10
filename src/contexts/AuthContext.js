//We will create a React Context in this file that will house all authentication info (currentUser, login, logout).
//React contexts allow us to store information and transport that info to the components that use it. We could store
//this info in the App component and just pass props to send the user information to other components but this isn't
//ideal for larger apps. Instead, we create the context and a component that will communicate this context to its
//children. Think of this much like Session storage in a .NET application.
import React, {useState, useEffect, useContext}from 'react'
import {auth} from '../base' //gives us acess to the auth object which has initilized authentication
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
//above are firebase functions we need to use in the component portion of thje file below

//Below we create a context (storage object) for all our auth info
const AuthContext = React.createContext()

//below we create a function that will allow us to use the context in components. we will import this funciton anytime we want access to our 3 currentUser, login, logout
export function useAuth() {
    return useContext(AuthContext)
}

//this component will prove the AuthContext info to the childern components nested inside of it. see App.js
//where we call to an instance of this component and nest all other componenets inside of it.
export default function AuthProvider({children}) {
    //create hooks for currentuser as well as another hook to determine if the context has info to share
    //with child components before rendering the child components to the screen
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    //Login functionallity
    //Instantiate a GithubAuthProvider object
    const githubAuthProvider = new GithubAuthProvider()

    async function login() {
        return (signInWithPopup(auth, githubAuthProvider).then(authData => {
            console.log(authData)
            setCurrentUser(authData.user)
            //this point in login logic is where we could add additional functionality such as role assignment or saving the user
            // to a local DB if one is present
        }))
    }


    //logout function
    async function logout() {
        signOut(auth).then(setCurrentUser(null)) 
    }

    //the object below will hold currentUser info and login/logout functions so we can use tghem in the child components.
    //we will pass this as a prop in the return below.
    const value= {currentUser, login, logout}

    useEffect(() => {
        //authChange will use firebase functionality to get user info, set the currrentUser hook to the value retreieved,
        //and allow components to load in using the custom "loading" hook
        const authChange = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return authChange;
    }, []);
  return (
    <AuthContext.Provider value={value}>
        {/* below we are waiting for the authcontext info to populate before loading the child components in the UI */}
        {!loading && children}
    </AuthContext.Provider>
  )
}
