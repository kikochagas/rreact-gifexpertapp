import React, { useState } from 'react';
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
//Funcional Component
const GifExpertApp = () => {

   
    const [categories, setCategories] = useState(['One Punch'])
    // const handleAdd = () => {
    //     //setCategories([...categories, 'Simpsons']);
    //     setCategories(cats => [...cats, 'Simpsons']);
    // }


    return (
        <>
            <h2> GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            
           <ol>
               {
                   categories.map((category) => 
                   <GifGrid
                        key={category}
                        category={category} />
               )}
           </ol>
        </>
    );
}

GifExpertApp.propTypes = {
    
}
GifExpertApp.defaultProps = {
    
}
export default GifExpertApp