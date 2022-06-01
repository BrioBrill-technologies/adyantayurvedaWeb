import { db, storage } from "../firebase";
import {
    query,
    getDocs,
    collection,
    where,
    doc,
    updateDoc,
    addDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

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
                const ref = doc(db, database, docs1.docs[0].id);
                await updateDoc(ref, data);
            }
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addBooking = async (data) => {
    try {
        // const invoiced = await addInvoice(data)
        // if(invoiced) {
        //     console.log(invoiced)
        //     data.invoiceId = invoiced;
        //     data.status = "booked";
            await addDoc(collection(db, "bookings"), data);
        // } else {
        //     alert("Could not add invoice");
        // }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addPrescription = async (data) => {
    try {
        await addDoc(collection(db, "prescriptions"), data);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const addInvoice = async (data) => {
    try {
        let invoiced
        const newInvoice = {
            DocId: data.DocId,
            patientId: data.patientId,
            date: data.date,
            amount: data.amount,
        };
        await addDoc(collection(db, "invoices"), newInvoice).then((res) => {
            invoiced = res.id;
        });
        return invoiced;
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

const modifyBooking = async (id, status) => {
    try {
        const q = query(collection(db, "bookings"));
        const docs = await getDocs(q);
        for (let i = 0; i < docs.docs.length; i++) {
            if (docs.docs[i].id === id) {
                const ref = doc(db, "bookings", docs.docs[i].id);
                await updateDoc(ref, {
                    status,
                });
            }
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const updateProfilePhoto = async (data, uid, type) => {
    try {
        const metaData = {
            contentType: "image/png",
        };
        console.log(data);
        const storageRef = ref(storage, `${type}/` + uid);
        const uploadTask = uploadBytesResumable(storageRef, data, metaData);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'running':
                        break;
                    case 'paused':
                        break;
                    case 'success':
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    updateUser({
                        photoURL: downloadURL,
                        uid,
                    });
                });
            }
        );
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export{
    updateUser,
    addBooking,
    addPrescription,
    addInvoice,
    addApproval,
    modifyBooking,
    updateProfilePhoto,
}