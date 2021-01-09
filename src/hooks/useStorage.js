import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

//Hook in react is small chunk of reusable code

const useStorage = (file) => {
 
    //Responsible for handling our file uploads n then returning some useful values abt that upload
    //Parameter will be file tryng to upload n it ll come from uploadform file

    const [progress, setProgress] = useState(0);
    const [error,setError] = useState(0);
    const [url, setUrl] = useState(null);
    //it ll be the image url that we get back from storage after the image fully uploaded 

    //we want to use storage sdk right here to upload this file that we get inside the hook
    //once get uploaded i also want to get image url n store that in database
    //n that our database ll contain list of all image url n then we can use that data to load images in a react component

    //now the code needs to run run everytime we get a new value bcoz that file value could change over time as
    //user selects diff files so put all our logic inside useEffect hook

    useEffect(() =>{

        //get a reference where a file should be saved inside default firebase storage bucket
        const storageRef = projectStorage.ref(file.name);

        //reference to a collection that we want to save document 
        const collectionRef =projectFirestore.collection('images');
        //collection is called images, as we r tryng to store data ,if it is not created then also firebase ll create it

        //Asynchronuous it take some time to do we attached a listener to it
        //whenever state of uplaod changes , progress changes
        storageRef.put(file).on('state_changed', (snap) => {

            //get a snapshot object =>//snapshot in time of upload at the moment in time 

            //percentage of progress of upload 
            let percentage =(snap.bytesTransferred / snap.totalBytes) * 100;
          
            //it is number in betn 0 n 100
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, /* after complete upload of a file */
        async () => {
            //IT FINDS THE FILE WE JUST UPLOADED N GETS DOWNLOAD URL N then storing it inside url variable
           const url = await storageRef.getDownloadURL();
           setUrl(url);
           const createdAt = timestamp();
           collectionRef.add({url : url, createdAt })

           //variable url n state url r diff
           //variable url doesnt override state url bcoz its inside a separate scope inside functn 
        });

        //put will take a file n put it in the reference that locatn 
        //uploading the file to reference

    } ,[file])    

    
    return { progress, url, error}
}

export default useStorage;


