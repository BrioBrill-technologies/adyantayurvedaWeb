// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDScFfYRb9NibVbTMQlCmIe8GFVrJvO_vM",
  authDomain: "adyantayurveda-cba8a.firebaseapp.com",
  projectId: "adyantayurveda-cba8a",
  storageBucket: "adyantayurveda-cba8a.appspot.com",
  messagingSenderId: "573886833679",
  appId: "1:573886833679:web:3f47f38671b2ce2136ef7a",
  measurementId: "G-0MYVE8Z92Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

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

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

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

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const updateUser = async (name, email, phone, city, state, zip, country) => {
  console.log(name, email, phone, city, state, zip, country);
  try {
    await updateDoc(collection(db, "users"), where("uid", "==", auth.currentUser.uid), {
      name,
      email,
      phone,
      city,
      state,
      zip,
      country,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const addBooking = async (user, doctor, date, time, status) => {
  try {
    await addDoc(collection(db, "bookings"), {
      date,
      time,
      status,
      patientId: user.uid,
      doctorId: doctor,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getBookings = async (user) => {
  try {
    const booking = []
    const q = query(collection(db, "bookings"), where("patientId", "==", user.uid));
    const docs = await getDocs(q);
    for (let i = 0; i < docs.docs.length; i++) {
      const docName = await getDoctor(docs.docs[i].data().doctorId);
      const book = {
        id: docs.docs[i].id,
        date: docs.docs[i].data().date,
        time: docs.docs[i].data().time,
        status: docs.docs[i].data().status,
        doctor: docName.name,
      };
      booking.push(book);
    }
    return booking;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getDoctor = async (uid) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const docs = await getDocs(q);
    return docs.docs[0].data();
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getDoctors = async () => {
  try {
    const doctors = []
    const q = query(collection(db, "users"), where("type", "==", "doctor"));
    const docs = await getDocs(q);
    for (let i = 0; i < docs.docs.length; i++) {
      const doc = {
        id: docs.docs[i].id,
        uid: docs.docs[i].data().uid,
        name: docs.docs[i].data().name,
        email: docs.docs[i].data().email,
        phone: docs.docs[i].data().phone,
        address: docs.docs[i].data().address,
        city: docs.docs[i].data().city,
        state: docs.docs[i].data().state,
        country: docs.docs[i].data().country,
        zip: docs.docs[i].data().zip,
        dob: docs.docs[i].data().dob,
      };
      console.log(doc);
      const p = query(collection(db, "doctors"), where("doctorId", "==", docs.docs[i].id));
      const d = await getDocs(p);
      doc.specialization = d.docs[0].data().specialization;
      doc.rating = d.docs[0].data().rating;
      doctors.push(doc);
    }
    return doctors;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  updateUser,
  addBooking,
  getBookings,
  getDoctors,
  getDoctor,
};