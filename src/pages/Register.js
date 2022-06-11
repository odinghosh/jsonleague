import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import trainerImage from './personal-training-loginpage.svg'
import Cookies from 'universal-cookie'

import '../styles/style.css'
import '../styles/general.css'
import '../styles/queries.css'

// Firebase SDK
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//Initialise cookies
const cookies = new Cookies()


const firebaseConfig = {
    apiKey: "AIzaSyBaxnPfnVYZKGzgo07O43S3OykoMl1qS-g",
    authDomain: "jsonleague.firebaseapp.com",
    projectId: "jsonleague",
    storageBucket: "jsonleague.appspot.com",
    messagingSenderId: "76946241417",
    appId: "1:76946241417:web:45a254e79c9b80fb645358",
    measurementId: "G-8WX33FZ0V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app)



export default function() {

    const [registered, setRegistered] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirm_password, check_confirm_password] = useState(false);

    const navigate = useNavigate();

 
    

    // This block of code will run only once when the page is rendered
    useEffect(()=>{

      //checking if a person is authenticated already
      var uid = cookies.get('uid')
      if(uid){
        navigate('../home')

      }


    })
   

    
    
    return <div>
   
    <div class="trainer-img">
      <img src={trainerImage} alt="trainer with friend" />
    </div>
    <div class="login-heading">
      <p class="heading">Create Account</p>
    </div>

    <form class="login-form" name="sign-up" netlify>
      <div class="input-email">
        <input
          id="email"
          type="email"
          placeholder="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <ion-icon
          name="mail-outline"
          class="input-img input-img--email"
        ></ion-icon>
      </div>

      <div class="input-password">
        <input
          id="password"
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <ion-icon
          name="key-outline"
          class="input-img input-img--password"
        ></ion-icon>
      </div>

      { !registered && <div class="input-confirm-password">
        <input
          id="confirm-password"
          type="password"
          placeholder=" confirm password"
          name="password"
          onChange={(e) => {
              if (e.target.value === password)
                  check_confirm_password(true)
              else
                  check_confirm_password(false)
          }}
          required
        />

        <ion-icon
          name="key-outline"
          class="input-img input-img--confirm-password"
        ></ion-icon>
          <p>{confirm_password ? '' : password == null ? '' : 'Invalid Confirm Password'}</p>
      </div>
      }

      <div class="btn-login">
        <a onClick={() =>{
            const auth = getAuth();
            if (registered)
            {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        cookies.set('uid', user.uid, {path:'/'})
                        console.log(user.uid)
                        navigate('../home')
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                    });
            }
            else
            {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        console.log("New User "+email+" has registered")
                        cookies.set('uid', user.uid, {path: '/'})
                        navigate('../home', {replace:true})
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                    });
            }
        }} href="#" class="btn btn--login">{
        !registered? 'Register':'login'
        }
        
        <ion-icon
            name="arrow-forward-outline"
            class="btn--img"
          ></ion-icon>
        </a>
      </div>
    </form>

    <p class="login-footer">
      Already have an account?
      <a href="#" class="login-footer--sign-up"  onClick={()=> {setRegistered(!registered)}}>Sign In</a>
    </p>
 
    
    
  </div>
}