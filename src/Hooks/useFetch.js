import { db } from "../firebase";
import {
    query,
    getDocs,
    collection,
    where,
} from "firebase/firestore";

// Get Patients
const getPatients = async () => {
    try {
        const Patients = [];
        const q = query(collection(db, "patients"));
        const docs = await getDocs(q);
        docs.docs.forEach((doc) => {
            Patients.push(doc.data());
        });
        return Patients;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const getSinglePatient = async (id) => {
    try {
        const q = query(collection(db, "patients"), where("uid", "==", id));
        const docs = await getDocs(q);
        return docs.docs[0].data();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

// Get Therapies Details
const getTherapies = async () => {
    try {
      const therapies = []
      const q = query(collection(db, "Therapies"));
      const docs = await getDocs(q);
      for (let i = 0; i < docs.docs.length; i++) {
        const document = docs.docs[i].data();
        document.id = docs.docs[i].id;
        therapies.push(document);
      }
      return therapies;
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

// Get Therapy Type
const getTherapyType = async () => {
    try {
        const therapyType = []
        const q = query(collection(db, "Therapies"));
        const docs = await getDocs(q);
        for (let i = 0; i < docs.docs.length; i++) {
            if(therapyType.includes(docs.docs[i].data().type)){
                break;
            } else {
                therapyType.push(docs.docs[i].data().type);
            }
        }
        return therapyType;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
  
// Get Specializations
const getSpecializations = async () => {
    try {
        const specializations = []
        const q = query(collection(db, "doctors"));
        const docs = await getDocs(q);
        for (let i = 0; i < docs.docs.length; i++) {
            if(specializations.includes(docs.docs[i].data().specialization)){
                break;
            } else {
                specializations.push(docs.docs[i].data().specialization);
            }
        }
        return specializations;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

// Get Not approved doctors & Therapists
const getNotApproved = async (type) => {
    try {
        const doctors = []
        const q = query(collection(db, type));
        const docs = await getDocs(q);
        for (let i = 0; i < docs.docs.length; i++) {
            if( docs.docs[i].data().approved === false){
                const document = docs.docs[i].data();
                document.id = docs.docs[i].id;
                doctors.push(document);
            } 
        }
        return doctors;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

// Get Approved doctors & Therapists
const getApproved = async (type) => {
    try {
        const doctors = []
        const q = query(collection(db, type));
        const docs = await getDocs(q);
        for (let i = 0; i < docs.docs.length; i++) {
            if( docs.docs[i].data().approved === true){
                const document = docs.docs[i].data();
                document.id = docs.docs[i].uid;
                doctors.push(document);
            }
        }
        return doctors;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

// Get Single Doctor & Therapist Details
const getSingleApproved = async (id, type) => {
    try {
        const q = query(collection(db, type));
        const docs = await getDocs(q);
        for(let i = 0; i < docs.docs.length; i++){
            if(docs.docs[i].id === id){
                const document = docs.docs[i].data();
                document.id = docs.docs[i].id;
                return document;
            } else if(docs.docs[i].data().uid === id ){
                const document = docs.docs[i].data();
                document.id = docs.docs[i].id;
                return document;
            } else {
                return null;
            }
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const getPrescriptionOrInvoice = async (type) => {
    try {
        const prescriptions = []
        const q = query(collection(db, type));
        const docs = await getDocs(q);
        for (let i = 0; i < docs.docs.length; i++) {
            prescriptions.push(docs.docs[i].data());
        }
        return prescriptions;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const getSinglePrescriptionOrInvoice = async (id, type) => {
    try {
        const q = query(collection(db, type), where("id", "==", id));
        const docs = await getDocs(q);
        return docs.docs[0].data();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const getTotalInvoiceAmount = async () => {
    try{
        const q = query(collection(db, "invoice"));
        const docs = await getDocs(q);
        let total = 0;
        for (let i = 0; i < docs.docs.length; i++) {
            total += docs.docs[i].data().amount;
        }
        return total; 
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const getBookings = async (type, id) => {
    try{
        const bookings = []
        const q = query(collection(db, "bookings") , where(type, "==", id));
        const docs = await getDocs(q);
        for (let i = 0; i < docs.docs.length; i++) {
            bookings.push(docs.docs[i].data());
        }
        return bookings;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export {
    getPatients,
    getSinglePatient,
    getTherapies,
    getTherapyType,
    getSpecializations,
    getNotApproved,
    getApproved,
    getSingleApproved,
    getPrescriptionOrInvoice,
    getSinglePrescriptionOrInvoice,
    getTotalInvoiceAmount,
    getBookings
};

