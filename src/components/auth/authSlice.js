import { createSlice } from '@reduxjs/toolkit'

const initialState={
    name:"",
    email:""
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    keepName(state,action){
        state.name=action.payload
    }
,
keepEmail(state,action){
    state.email=action.payload
}
    
   
  }
})

export const { keepEmail, keepName } = authSlice.actions
export default authSlice.reducer