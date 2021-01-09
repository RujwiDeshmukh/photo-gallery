import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({ selectedImg , setSelectedImg }) =>  {

    const handleClick = (e) => {

        //as we click on enlareged image it also closes itself we dont want that as
        //enlarged image contain in backdrop so it closes
        if(e.target.classList.contains('backdrop'))
        {

        setSelectedImg(null);
        //as we click backdrop set image to null so modal disappears    
        }
    }

 
    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}>
            {/*backdrop is background after selecting the image */}
             <motion.img src={selectedImg} alt="enlarged pic"
             initial={ {y: "-100vh"} } /*viewport height*/
             animate={{ y : 0}}
             />
             
        </motion.div>
    )

}

export default Modal;