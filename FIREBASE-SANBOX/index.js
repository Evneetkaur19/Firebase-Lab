  //Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import{
    getDatabase,
    ref,
    child,
    get,
    onValue,
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAgBmPt1gWY2VWKZr7bVHyaXi1bgaYbTMg",
    authDomain: "workshop-wd-2.firebaseapp.com",
    projectId: "workshop-wd-2",
    storageBucket: "workshop-wd-2.appspot.com",
    messagingSenderId: "921593653681",
    appId: "1:921593653681:web:b7c398b346206a61873590",
    measurementId: "G-BKDN7XCM4H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();

  const messages = ref(database, "messages");

  onValue(messages,(snapshot) => {
    // console.log(snapshot);
    const ul = document.getElementById("messages");

    ul.replaceChildren();

    snapshot.forEach((childSnapshot) =>{
        console.log(childSnapshot.key);
        console.log(childSnapshot.val());
        
        const childData = childSnapshot.val();
        const text = document.createTextNode(childData.message + " ~ " + childData.name);
        const li = document.createElement("li");

        li.appendChild(text);
        ul.appendChild(li);
    });
  });
                  

