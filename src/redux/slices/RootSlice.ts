import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        car_make: "Car Make",
        car_model: "Car Model",
        car_year: "Car Year",
        car_mileage: "Car Mileage",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseCar_make: (state, action) => { state.car_make = action.payload }, //All we're doing is setting the input to the state.name
        chooseCar_model: (state, action) => { state.car_model = action.payload }, 
        chooseCar_year: (state, action) => { state.car_year = action.payload }, 
        chooseCar_mileage: (state, action) => { state.car_mileage = action.payload }, 
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCar_make, chooseCar_model, chooseCar_year, chooseCar_mileage } = rootSlice.actions