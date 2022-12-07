const { createSlice } = require("@reduxjs/toolkit")
const { register, login, logOut } = require("./operations")

const initialState = {
  user: { 
    name: null,
    email: null
   },
  token: null,
  isLoggedIn: false,
  isRefreshing: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) { 
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    [login.fulfilled](state, action) { 
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    [logOut.fulfilled](state) { 
      state.user = { name: null, email: null }
      state.token = null
      state.isLoggedIn = false
    }
  }
})