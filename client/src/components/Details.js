import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addcommande } from '../JS/commandeSlice'

const Details = () => {
    const params=useParams()
    const user=useSelector((store)=>store.user?.user)
    const products=useSelector((state)=>state.product?.product)
    const product=products?.filter((el)=>el._id==params.id)[0];
      const [newcommande, setnewcommande] = useState({
    nameuser:user?.name,
    Iduser:user?._id,
    nomprduit:product.name,
    price:product.price,
    quantite:"",

  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div>
        <h1> Détails product</h1>
        <h1>{product?.name}</h1>
        <input type='number' onChange={(e)=>setnewcommande({...newcommande,quantite:e.target.value})} placeholder='quantite'/>
        <button onClick={()=>(dispatch(addcommande(newcommande)),navigate('/panier'))}>commander</button>
    </div>
  )
}

export default Details
