import intializeFirebase from './../Firebase/Firebase.init'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
   getIdToken,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { useEffect, useState } from 'react'

intializeFirebase()

const useFirebase = () => {
  const auth = getAuth()
      const [user, setUser] = useState({})
      const [isLoading, setIsLoading] = useState(true)
      const [authError, setAuthError] = useState('')
      const [admin, setAdmin] = useState(false)
      const [token, setToken] = useState('')

  const googleProvider = new GoogleAuthProvider()
  const [error, setError] = useState('')

      const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setAuthError('')
            const newUser = { email, displayName: name }
            setUser(newUser)
            // save user to the database
            saveUser(email, name, 'POST')
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name,
            })
              .then(() => {})
              .catch((error) => {})
            history.replace('/')
          })
          .catch((error) => {
            setAuthError(error.message)
            console.log(error)
          })
          .finally(() => setIsLoading(false))
      }

          const loginUser = (email, password, location, history) => {
            setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
              })
              .catch((error) => {
                setAuthError(error.message)
              })
              .finally(() => setIsLoading(false))
          }

    const signInWithGoogle = (location, history) => {
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user
          saveUser(user.email, user.displayName, 'PUT')
          // saveUser(user.email, user.displayName, 'PUT')
          setAuthError('')
          const destination = location?.state?.from || '/'
          history.replace(destination)
        })
        .catch((error) => {
          setAuthError(error.message)
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

  // const handleLogout = () => {
       const logOut = () => {
         setIsLoading(true)
         signOut(auth)
           .then(() => {
            //  setUser({})
           })
           .finally(() => setIsLoading(false))
       }
  // }

   useEffect(() => {
     const unsubscribed = onAuthStateChanged(auth, (user) => {
       if (user) {
         setUser(user)
         getIdToken(user).then((idToken) => {
           setToken(idToken)
         })
       } else {
         setUser({})
       }
       setIsLoading(false)
     })
     return () => unsubscribed
   }, [auth])
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
  // const signInUsingGoogle = () => {
  //   return signInWithPopup(auth, provider)
  // }
  // const handleUserLogin = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //     });
  // };

      const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        console.log(user)
        fetch('http://localhost:5000/users', {
          method: method,
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        }).then()
      }

  return {
    // handleGoogleLogin,
    registerUser,
    user,
    isLoading,
    // handleLogout,
    signInWithGoogle,
    logOut,
    loginUser
  }
}

export default useFirebase
