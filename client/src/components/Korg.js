import React from 'react'

const korg = ({data}) => {
    
    return (
        
        <div className='box'>
        <img className='img4x' src={data.picture} alt='4x'/>
        <h1 className='nom'> name:{data.name}</h1>
        <h2 className='desc'>description: {data.description} </h2>
        <h2 className='prix'> prix:{data.prix} </h2>
        </div>
        
    )
}

export default korg;
