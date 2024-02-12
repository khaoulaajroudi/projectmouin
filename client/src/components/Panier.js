import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletecommande } from '../JS/commandeSlice'

const Panier = () => {
    const user=useSelector((store)=>store.user?.user)
    console.log("user",user)
    const products=useSelector((state)=>state.product?.product)
    const commandes=useSelector((store)=>store.commande?.commande)
    console.log("commandes",commandes)
    const commande_user=commandes?.filter((el)=>el.Iduser==user._id)
    console.log("commande_user",commande_user)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Panier</h1>
{commande_user?.map((el)=>(
    <div>
        <h1>nomprduit:{el?.nomprduit}</h1>
        <h1>price:{el?.price}</h1>
        <h1>quantite:{el?.quantite}</h1>
        <button onClick={()=>dispatch(deletecommande(el._id))}>delete</button>
        </div>
))}
    </div>
  )
}

export default Panier
