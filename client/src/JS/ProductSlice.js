import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getproduct=createAsyncThunk('/getproduct',async()=>{
    try {
        let resultat= await axios.get('http://localhost:5000/product/all')
        return  resultat;
    } catch (error) {
        console.log(error)
    }
})
export const addproduct=createAsyncThunk('/addproduct',async(newproduct)=>{
    try{
        let resultat= await axios.post('http://localhost:5000/product/add',newproduct)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})
export const deleteproduct=createAsyncThunk('/deleteproduct',async(id)=>{
    try{
        let resultat= await axios.delete(`http://localhost:5000/product/${id}`)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})
export const updateproduct=createAsyncThunk('/updateproduct',async(id,upproduct)=>{
    try{
        let resultat= await axios.put(`http://localhost:5000/product/${id}`,upproduct)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})


const initialState = {
  product:null,
  status:null
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getproduct.fulfilled, (state, action) => {
        state.status = "success";
        state.product = action.payload?.data?.lists;
      })
      .addCase(getproduct.rejected, (state) => {
        state.status = "fail";
      })
    //   add
            .addCase(addproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addproduct.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(addproduct.rejected, (state) => {
        state.status = "fail";
      })
    //   delete
      .addCase(deleteproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteproduct.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deleteproduct.rejected, (state) => {
        state.status = "fail";
      })
       //   update
       .addCase(updateproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateproduct.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(updateproduct.rejected, (state) => {
        state.status = "fail";
      })
}
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer