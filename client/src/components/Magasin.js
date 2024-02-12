import React, { useState } from 'react';

import Navbarr from './Navbarr';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Magasin = () => {
  const products=useSelector((store)=>store.product?.product)
  const user=useSelector((store)=>store.user?.user)

  console.log(products)
  return (
    <div>
    <Navbarr />
    <div class="wrapper">
      {products?.map((el)=>(
        <> 
<div class="card">
<img  className='img4x' src="https://images.pexels.com/photos/10665469/pexels-photo-10665469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='korg4x'/>
  <div class="info">
    <h1>{el.name}</h1>
    <p>spécialement pour l'espace germanophone avec des styles et des sons issus des chœurs acapella et de fête</p>
    <Link to={`/details/${el._id}`}>Détails</Link>
  </div>
</div>
</>
      ))}
</div>
    </div>
  );
}

export default Magasin;
