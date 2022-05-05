import { db } from "../firebase";
import {
    query,
    getDocs,
    collection,
    where,
    doc,
    setDoc,
    updateDoc,
} from "firebase/firestore";

const updateUser = async (data) => {
    try {
        const red = query(collection(db, "users"), where("uid", "==", data.uid));
        const docs = await getDocs(red);
        let q
        let database
        if(docs.docs.length > 0) {
            if(docs.docs[0].data().type === "admin") {
                database = 'admins'
                q = query(collection(db, "admins"), where("uid", "==", data.uid));
            } else if(docs.docs[0].data().type === "doctor") {
                database = 'doctors'
                q = query(collection(db, "doctors"), where("uid", "==", data.uid));
            } else if(docs.docs[0].data().type === "therapist") {
                database = 'therapists'
                q = query(collection(db, "therapists"), where("uid", "==", data.uid));
            } else {
                database = 'patients'
                q = query(collection(db, "patients"), where("uid", "==", data.uid));
            }
            const docs1 = await getDocs(q);
            if (docs1.docs.length > 0) {
                await setDoc(doc(db, database, docs1.docs[0].id), data);
            }
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addBooking = async (data) => {
    try {
        await setDoc(doc(db, "bookings"), data);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addPrescription = async (data) => {
    try {
        await setDoc(doc(db, "prescriptions"), data);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addInvoice = async (data) => {
    try {
        await setDoc(doc(db, "invoices"), data);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addApproval = async (id, type) => {
    try {
        const q = query(collection(db, type));
        const docs = await getDocs(q);
        for (let i = 0; i < docs.docs.length; i++) {
            if (docs.docs[i].id === id) {
                const ref = doc(db, type, docs.docs[i].id);
                await updateDoc(ref, {
                    approved: true,
                });
            }
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export{
    updateUser,
    addBooking,
    addPrescription,
    addInvoice,
    addApproval
}