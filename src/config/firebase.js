import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBawdbVGHe0zADnIlkTnObJib08g5PPZKI",
  authDomain: "exp-olx-app.firebaseapp.com",
  projectId: "exp-olx-app",
  storageBucket: "exp-olx-app.appspot.com",
  messagingSenderId: "355865374297",
  appId: "1:355865374297:web:21c059da97c74d0a8bcb48"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

function register(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
}

function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
}


function addUserToDb(user) {
  return db.collection('users').add(user)
}

function getAllUsers() {
  return new Promise((resolve) => {
    db.collection('users').get().then(snapshot => {
      const users = []
      snapshot.forEach(doc => {
        users.push({ ...doc.data(), id: doc.id })
      })
      resolve(users)
    })
  })
}





function getAllAds() {
  return new Promise((resolve) => {
    db.collection('ads').get().then(snapshot => {
      const ads = []
      snapshot.forEach(doc => {
        ads.push({ ...doc.data(), id: doc.id })
      })
      resolve(ads)
    })
  })
}



function getSpecificAd(adId) {
  return new Promise((resolve) => {
    db.collection('ads').doc(adId).get().then(doc => {
      resolve(doc.data()) 
    })
  })
}

function postyourAdd(addObj) {

  // console.log(addObj)
  return db.collection('/ads').add(addObj)


}

function uploadAdsImage(files) {

  return new Promise((resolve, reject) => {

    const file = files[0]             //file have a image or file which we have given
    const ref = storage.ref(`/adsImage/${file.name}`)   //ref is a path that where to put file
                                                           
    ref.put(file).then((snapshot) => {      /// in this line we are putting above image or file in in above path


      ref.getDownloadURL().then(url => {  // in this line we are getting url 
        // console.log("url", url)
        resolve(url)
      }).catch(e => console.log(e.message))


    })



  })


}

function uploadUserImage(files) {

  return new Promise((resolve, reject) => {

    const file = files[0]
    const ref = storage.ref(`/userImage/${file.name}`)
    ref.put(file).then((snapshot) => {


      ref.getDownloadURL().then(url => {
        // console.log("url", url)
        resolve(url)
      }).catch(e => console.log(e.message))


    })


  })


}

function updateProfileImage(imageUrl,userId) {
  return db.collection("users").doc(userId).update({
    profileImage:imageUrl,
   
  })
    .then(() => {
      // console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

function updateProfileName(fullName,userId) {
  return db.collection("users").doc(userId).update({
    fullName:fullName,
   
  })
    .then(() => {
      // console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

function updateProfileNumber(phoneNumber,userId) {
  return db.collection("users").doc(userId).update({
    phoneNumber:phoneNumber,
   
  })
    .then(() => {
      // console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}







function logout() {
  return auth.signOut()
}



export {
  register,
  login,
  addUserToDb,
  getAllUsers,
  getAllAds,
  getSpecificAd,
  uploadAdsImage,
  postyourAdd,
  logout,
  auth,
  uploadUserImage,
  updateProfileImage,
  updateProfileName,
  updateProfileNumber


}
