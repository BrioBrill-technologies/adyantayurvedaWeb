import {db, auth} from '../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
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
const signInWithGoogle = async (type) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      newRegistration(user, user.email, type);
    }
    return true;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const newRegistration = async (user, email, type) => {
  try {
    if(type === 'patient') {
      await addDoc(collection(db, "users"), {
        type: 'patient',
        uid: user.uid,
      });
      await addDoc(collection(db, "patients"), {
        uid: user.uid,
        email,
        name: user?.displayName || '',
      });
    } else if(type === 'doctor') {
      await addDoc(collection(db, "users"), {
        type: 'doctor',
        uid: user.uid,
      });
      await addDoc(collection(db, "doctors"), {
        uid: user.uid,
        email,
        name: user?.displayName || '',
        approved: false,
      });
    } else if(type === 'therapist') {
      await addDoc(collection(db, "users"), {
        type: 'therapist',
        uid: user.uid,
      });
      await addDoc(collection(db, "therapists"), {
        uid: user.uid,
        email,
        name: user?.displayName || '',
        approved: false,
      });
    } else if(type === 'admin') {
      await addDoc(collection(db, "users"), {
        type: 'admin',
        uid: user.uid,
      });
      await addDoc(collection(db, "admins"), {
        uid: user.uid,
        email,
        name: user?.displayName || '',
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

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
const registerWithEmailAndPassword = async (email, password, type) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await sendEmailVerification(user);
    newRegistration(user, email, type);
    return 'true';
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