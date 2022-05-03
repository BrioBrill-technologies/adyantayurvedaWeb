import { db } from "../firebase";
import {
    query,
    getDocs,
    collection,
    where,
    doc,
    setDoc,
} from "firebase/firestore";

const updateUser = async (data) => {
    try {
        const q = query(collection(db, "users"), where("uid", "==", data.uid));
        const docs = await getDocs(q);
        if (docs.docs.length > 0) {
            await setDoc(doc(db, "users", docs.docs[0].id), data);
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addBooking = async (data) => {
    try {
        const q = query(collection(db, "bookings"), where("uid", "==", data.uid));
        const docs = await getDocs(q);
        if (docs.docs.length > 0) {
            await setDoc(doc(db, "bookings", docs.docs[0].id), data);
        } else {
            await setDoc(doc(db, "bookings"), data);
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addPrescription = async (data) => {
    try {
        const q = query(collection(db, "prescriptions"), where("uid", "==", data.uid));
        const docs = await getDocs(q);
        if (docs.docs.length > 0) {
            await setDoc(doc(db, "prescriptions", docs.docs[0].id), data);
        } else {
            await setDoc(doc(db, "prescriptions"), data);
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addInvoice = async (data) => {
    try {
        const q = query(collection(db, "invoices"), where("uid", "==", data.uid));
        const docs = await getDocs(q);
        if (docs.docs.length > 0) {
            await setDoc(doc(db, "invoices", docs.docs[0].id), data);
        } else {
            await setDoc(doc(db, "invoices"), data);
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export{
    updateUser,
    addBooking,
    addPrescription,
    addInvoice
}