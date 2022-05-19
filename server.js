  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
  import { 
    getFirestore, 
    collection, 
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    onSnapshot, 
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBoaGerfujnOaUQ-QUPX0LOabLLzqiZ9mg",
    authDomain: "pasteleria-59af6.firebaseapp.com",
    projectId: "pasteleria-59af6",
    storageBucket: "pasteleria-59af6.appspot.com",
    messagingSenderId: "502262588557",
    appId: "1:502262588557:web:549675955503df03596ec4",
    measurementId: "G-S1PQ37YJ3M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore()
  const analytics = getAnalytics(app);

  export const saveTask = (name, tel, mail) => addDoc(collection(db, 'clientes'),{name, tel, mail});

      export const getTasks = () => getDocs(collection(db, 'clientes'));

      export const onGetClient = (callback) => onSnapshot(collection(db, 'clientes'), callback);

      export const deleteClient = (id) => deleteDoc(doc(db, 'clientes', id));

      export const getClient = id => getDoc(doc(db, 'clientes', id));

      export const updateClient = (id, newFields) => updateDoc (doc(db, 'clientes', id), newFields);