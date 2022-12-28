import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();
    
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider);
       
        //  .finally(() => setLoading(false));
    }

    //observe user state change
    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, user =>{
           if(user){
               setUser(user);
           }
           else{
               setUser({})
           }
           setLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const passwordSignUp = (email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    const passwordSignIn = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   setUser(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(() => setLoading(false)); 
    }
    return{
        user,
        isLoading,
        signInUsingGoogle,
        passwordSignIn,
        passwordSignUp,
        logOut
    }
}
export default useFirebase;

