// Search entry component

import React, { Fragment, useState } from 'react';

// onSearchEntered is a prop (a parameter passed into a component)
export default function SearchInput({onSearchEntered}) {
   
    const [artist, setArtist] = useState("");
 
    return <div style={{marginTop: '8px', marginBottom: '8px'}}>
            <label htmlFor='artist'>Enter an artist:</label>
            <input id='artist' value={artist} onChange={update} />
            </div>;
           
     
    function update() {
        const artist = document.getElementById('artist').value;
        onSearchEntered(artist);    
        setArtist(artist);
    }
    
}
