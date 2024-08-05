import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwxLRTvZTqokIRZn6Nwt8_BY3o0TDLRmw",
    authDomain: "netflix-clone-9b146.firebaseapp.com",
    projectId: "netflix-clone-9b146",
    storageBucket: "netflix-clone-9b146.appspot.com",
    messagingSenderId: "1061429835549",
    appId: "1:1061429835549:web:35d5b2c47ba18fd64453f4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user

        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "Local",
            email,
        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
}


