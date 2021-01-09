import React from 'react';
import {motion} from 'framer-motion';


const Title = () => {
  return (
    <div className="title">
      <h1>
        <div> 
        <motion.p 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}> <i style={{ color: '#61DAFB' }} className="fab fa-react"></i>PhotoGallery</motion.p>
        </div>
      </h1>
    </div>
  )
}

export default Title;