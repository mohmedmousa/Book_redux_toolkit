import { createSlice } from "@reduxjs/toolkit";

const authslice=createSlice({
    name:'auth',
    initialState:{islogin:false,name:'mousa'},
    reducers:{
        isloginout:(state,action)=>{
            state.islogin=!state.islogin
        }
    }
})
export const {isloginout}=authslice.actions
export default authslice.reducer