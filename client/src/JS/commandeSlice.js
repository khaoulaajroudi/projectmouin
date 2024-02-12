import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getcommande=createAsyncThunk('/getcommande',async()=>{
    try {
        let resultat= await axios.get('http://localhost:5000/commande/all')
        return  resultat;
    } catch (error) {
        console.log(error)
    }
})
export const addcommande=createAsyncThunk('/addcommande',async(newcommande)=>{
    try{
        let resultat= await axios.post('http://localhost:5000/commande/add',newcommande)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})
export const deletecommande=createAsyncThunk('/deletecommande',async(id)=>{
    try{
        let resultat= await axios.delete(`http://localhost:5000/commande/${id}`)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})
export const updatecommande=createAsyncThunk('/updatecommande',async(id,upcommande)=>{
    try{
        let resultat= await axios.put(`http://localhost:5000/commande/${id}`,upcommande)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})


const initialState = {
  commande:null,
  status:null
}
export const commandeSlice = createSlice({
  name: 'commande',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getcommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getcommande.fulfilled, (state, action) => {
        state.status = "success";
        state.commande = action.payload?.data?.lists;
      })
      .addCase(getcommande.rejected, (state) => {
        state.status = "fail";
      })
    //   add
            .addCase(addcommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addcommande.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(addcommande.rejected, (state) => {
        state.status = "fail";
      })
    //   delete
      .addCase(deletecommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletecommande.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deletecommande.rejected, (state) => {
        state.status = "fail";
      })
       //   update
       .addCase(updatecommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updatecommande.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(updatecommande.rejected, (state) => {
        state.status = "fail";
      })
}
})

// Action creators are generated for each case reducer function
export const {} = commandeSlice.actions

export default commandeSlice.reducer