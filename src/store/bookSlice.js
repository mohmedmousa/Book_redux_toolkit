import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const getbook =createAsyncThunk('book/getbook',async (_,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try {
        const res =await fetch('http://localhost:3005/book')
        const data = await res.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const insertbook= createAsyncThunk('book/insertbook',async(bookdata,thunkAPI)=>{
    const {rejectWithValue,getState} =thunkAPI
    try {
        bookdata.username=getState().auth.name
        const res = await fetch('http://localhost:3005/book', {
        method: 'post',
        body: JSON.stringify(bookdata),
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = await res.json();
      return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deletebook=createAsyncThunk('deletebook',async(id,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try {
        await fetch(`http://localhost:3005/book/${id}`,{
            method:'delete',
            headers: {
                'Content-type': 'application/json'
              }
        })
        
        
        return id
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const BookSlice= createSlice({
    name:'book',
    initialState:{books:[],loading:true,reject:null},
    reducers:{},
    extraReducers:{
        //get the books
        [getbook.pending]:(state,action)=>{
            state.loading=true
            state.reject=null
        },
        [getbook.fulfilled]:(state,action)=>{
            
            state.loading=false
            state.books=action.payload
        },
        [getbook.rejected]:(state,action)=>{
            state.loading=false
            state.reject=action.payload
        },
        // extra reducers for insert book
        [insertbook.pending]:(state,action)=>{
            state.loading=true
            state.reject=null
        },
        [insertbook.fulfilled]:(state,action)=>{
            state.books.push(action.payload)
            state.loading=false

        },
        [insertbook.rejected]:(state,action)=>{
            state.loading=false
            state.reject=action.payload
            
        },
        //delete book
        [deletebook.pending]:(state,action)=>{
            state.loading=true
            state.reject=null
        },
        [deletebook.fulfilled]:(state,action)=>{
            state.loading=false
            state.books=state.books.filter((item)=>item.id !== action.payload)
            
        },
        [deletebook.rejected]:(state,action)=>{
            state.loading=false
            state.reject=action.payload
            
        }
    }
})

export default BookSlice.reducer