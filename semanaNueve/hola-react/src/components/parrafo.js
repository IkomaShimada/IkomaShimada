import React from 'react'


function Parrafo ({texto, banda}){
    // console.log(props)
    return (
        <div>
            <p>
                {texto}
                <br/>
                {/*Reendizado condicional*/}
                {banda ? (<small>{banda}</small>):(<small>No existe en la BD</small>)}
            </p>
        </div>
    );
}

export default Parrafo