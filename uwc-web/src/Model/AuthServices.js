import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthServices = () => {
  const auth = getAuth();
  const signIn = (setUser, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const logOut = (setUser) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {signIn, logOut}
};

export default AuthServices();