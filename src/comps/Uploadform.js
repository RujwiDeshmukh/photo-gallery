import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const[file, setFile] = useState(null);
    const[error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

   const changeHandler = (e) => {
       let selected = e.target.files[0];
       //target will be all the selected files bt we want only first one
       console.log(selected);

       //now we want to store that in state
       //we only want to update this to be whatever selected

       //does that array types include types like png or jpeg so this ll evaluate to false
       if(selected && types.includes(selected.type)){
           setFile(selected);
           setError(" ");
       }

       else{
           setFile(null);
           setError('Please select an image file (png or jpeg)');

       }
   }
    return (
        <div>

            <form>
                <label>
               {/* for taking input as file from computer */}
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
                </label>
                <div className="output">
                     {error &&  <div className="error">{error}</div>}
                     {file && <div> {file.name}</div>}
                     {file && <ProgressBar file={file} setFile={setFile}/>}
                     {/*we passed setFile ,so when the progress is complete we can set file back to null,then progress bar doesnt show gain  */}
                </div>
            </form>
        </div>
    )
}


export default UploadForm;