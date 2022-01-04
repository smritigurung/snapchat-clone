import { createSlice } from '@reduxjs/toolkit'

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage: null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    // When we set the cameraImage, we want to change the state so that it changes the cameraImage 
    // inside of our state to whatever we pass in the action payload
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload
    },
    resetCameraImage: (state) => {
      state.cameraImage = null
    }
  }

})

export const { setCameraImage, resetCameraImage } = cameraSlice.actions

export const selectCameraImage = (state) => state.camera.cameraImage

export default cameraSlice.reducer
