import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async ()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const json = res.json();
    return json;
})

export const fetchProduct = createAsyncThunk('products/fetchProducts', async (id)=>{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = res.json();
    return json;
})

const productState = {
    product:null,
    error:null,
    status:'idle'
}

const initialState = {
    products:null,
    error:null,
    status:'idle'
}

const {reducer, actions} = createSlice({
    name:'products',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.status = 'loading'
        }).addCase(fetchProducts.fulfilled, (state, {payload})=>{
            state.status = 'success'
            state.products = payload
        }).addCase(fetchProducts.rejected, (state, action)=>{
            state.status = 'error';
            console.log(action);
            state.error = action.error
        })
    }
})

const product = createSlice({
    name:'product',
    initialState: productState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.status = 'loading'
        }).addCase(fetchProducts.fulfilled, (state, {payload})=>{
            state.status = 'success'
            state.product = payload
        }).addCase(fetchProducts.rejected, (state, action)=>{
            state.status = 'error'
        })
    }
})
export const productReducer = product.reducer;

// const initialState = {
//     products:[
//         {
//             id:1,
//             title:'samsung',

//         }
//     ]
// }
// const {reducer, actions} = createSlice({
//     name:'products',
//     initialState,
//     reducers: {
//         setProducts:(state, action)=>{
//             return state
//         }
//     }
// })


export default reducer;
// export const {setProducts} = actions;

export const getProducts = (state)=> state.products;
export const getProduct = (state)=> state.product;