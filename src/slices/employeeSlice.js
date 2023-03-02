import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employeeData",
    initialState: {
        value: []
    },
    reducers: {
        getEmployeeData: (state, action) => {
            state.employeeData = action.payload;
        },
    },
})

export const { getEmployeeData } = employeeSlice.actions

export default employeeSlice.reducer;