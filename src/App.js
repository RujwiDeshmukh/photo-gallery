import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/Uploadform';
import Modal from './comps/Modal';
import Delete from './comps/Delete'
import firebase from 'firebase/app';//firebase sdk
import 'firebase/firestore';//database
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <SignOut/>
      <Title/>
     <section>
       { user ? <MainPage /> : <SignIn/> }
     </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
     <>
    <button className= "sign-in" onClick={signInWithGoogle}>Sign In with Google</button>
    </>
  )
}


function SignOut() {
  return auth.currentUser && (
    <>
    <button className ="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    </>
  )
}

function MainPage(){

  const[selectedImg, setSelectedImg] = useState(null);
  
 return (
   <div>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>} 
      {/*{selectedImg && <Delete selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>} */}
      
      

      </div>

 )
}


export default App;

