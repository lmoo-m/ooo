import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import app from "./firebaseConfig";

const firestore = getFirestore(app);

export const retrieveData = async (collectionName) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

export const addData = async (collection, data, id) => {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(firestore, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};
