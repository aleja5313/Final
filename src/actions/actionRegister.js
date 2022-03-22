import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { collection, setDoc,doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { v4 } from "uuid";

export const registroEmailPasswordNombre = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    console.log(email,password,name)
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
          console.log(user)
        await updateProfile(auth.currentUser, { displayName: name });
        //console.log(e);
        const docRef = doc(db, "users", v4());
        const payload = {
          nombre: user.displayName,
          correo: user.email,
          acceso: true,
        };

        await setDoc(docRef, payload);

        dispatch(registerSincrono(user.email, user.uid, user.displayName));
        
      })
      .catch((e) => {
        //console.log(e);
      });
  };
};

export const registerSincrono = (email, password, name) => {
  return {
    type: types.register,
    payload: {
      email,
      password,
      name,
    },
  };
};
