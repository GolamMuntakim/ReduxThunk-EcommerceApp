import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    products : [],
    isLoading : false ,
    error : null
}
const BASE_URL = 'http://localhost:3000/products'
export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
  const res = await axios.get(BASE_URL);
  return res.data
})
export const deleteProduct = createAsyncThunk('products/deleteProduct', async(id)=>{
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return id
})
export const createProduct = createAsyncThunk('products/createProduct', async(product)=>{
  const res = await axios.post(BASE_URL, product);
  return res.data
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers : (builder) =>{
    builder
    .addCase(fetchProducts.pending, (state)=>{
      state.isLoading = true ;
      state.error = null ;
    })
    .addCase(fetchProducts.fulfilled, (state, action)=>{
      state.products = action.payload; 
      state.isLoading = false ;
     
    })
    .addCase(fetchProducts.rejected, (state, action)=>{
      state.isLoading = false 
      state.error = "Failed to fetch data" || action.error.message ;
    })
    .addCase(deleteProduct.fulfilled, (state, action)=>{
      state.products = state.products.filter((product)=>{product.id != action.payload.id})
    })
    .addCase(createProduct.fulfilled, (state, action)=>{
      state.products.push(action.payload)
    })
  }
})


export default productSlice.reducer


