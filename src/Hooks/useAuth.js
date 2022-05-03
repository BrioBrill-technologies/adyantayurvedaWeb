import {db, auth} from '../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const googleProvider = new GoogleAuthProvider();

// Google SignIn
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        type: 'patient',
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        dob: '',
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Login with email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Registration with email and password
const registerWithEmailAndPassword = async ( email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      type: 'patient',
      uid: user.uid,
      authProvider: "local",
      email,
      phone: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zip: '',
      dob: '',
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Password reset
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Logout user
const logout = () => {
  signOut(auth);
};

export {
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
}