import React from 'react';

function Hello({color, name, isSpecial}) {
    return (
        <div style={{color: color}}>
            {isSpecial && <b>*</b>} 안녕하세요. {name}
        </div>
        
        );
}

export default Hello;