import intializeFirebase from './../Firebase/Firebase.init'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { useEffect, useState } from 'react'

intializeFirebase()

const useFirebase = () => {
  const auth = getAuth()
      const [isLoading, setIsLoading] = useState(true)


  const provider = new GoogleAuthProvider()

  const githubProvider = new GithubAuthProvider()

  const [user, setUser] = useState({})
  const [error, setError] = useState('')

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)

        // console.log(result.user);
        // setError('')
      })
      .finally(() => setIsLoading(false))
  }

   useEffect(() => {
     const unsubscribed = onAuthStateChanged(auth, (user) => {
       if (user) {
         setUser(user)
       } else {
         setUser({})
       }
       setIsLoading(false)
     })
     return () => unsubscribed
   }, [])

  const handleLogout = () => {
      const logOut = () => {
        setIsLoading(true)
        signOut(auth)
          .then(() => {})
          .finally(() => setIsLoading(false))
      }
  }

  // const handleGithubLogin = () => {
  //   signInWithPopup(auth, githubProvider)
  //     .then((result) => {
  //       setUser(result.user);
  //       setError("");
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  // const handleUserRegister = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //     });
  // };
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, provider)
  }
  // const handleUserLogin = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //     });
  // };

  return {
    handleGoogleLogin,
    user,
    isLoading,
    handleLogout,
    signInUsingGoogle
  }
}

export default useFirebase
