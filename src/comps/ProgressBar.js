import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile}) => {

    const  {url, progress} = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
    if(url)
    {
        setFile(null);
        //as we get url after progress is 100% so we want progress bar to show 
    }
    } , [url, setFile] )

    //we need to store urls inside the database so that we can use the data to show the images
  
    return (
       /* <div className="progress-bar" style={{ width: progress + '%'}}> </div> */
       <motion.div className="progress-bar"
       initial={{width: 0}}
       animate={{width: progress + '%'}}>
             
       </motion.div>
       
       
    )
}

export default ProgressBar;
