import { db } from "../firebase";
import {
    query,
    getDocs,
    collection,
    where,
} from "firebase/firestore";

// Get Therapies Details
const getTherapies = async () => {
    try {
      const therapies = []
      const q = query(collection(db, "Therapies"));
      const docs = await getDocs(q);
      for (let i = 0; i < docs.docs.length; i++) {
        therapies.push(docs.docs[i].data());
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
                doctors.push(docs.docs[i].data());
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
                doctors.push(docs.docs[i].data());
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
        const q = query(collection(db, type), where("id", "==", id));
        const docs = await getDocs(q);
        return docs.docs[0].data();
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

const getSinglePrescriptionOrInvoiceById = async (id, type, person) => {
    try {
        const prescriptions = []
        const q = query(collection(db, type), where(person, "==", id));
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



export {
    getTherapies,
    getTherapyType,
    getSpecializations,
    getNotApproved,
    getApproved,
    getSingleApproved,
    getPrescriptionOrInvoice,
    getSinglePrescriptionOrInvoice,
    getSinglePrescriptionOrInvoiceById,
};

