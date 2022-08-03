import {createSlice} from "@reduxjs/toolkit"

const catSlice = createSlice({
    name: "cat",
    initialState: {
        name: "펄이",
        age: 10,
    },
    reducers: {
        changeName: (state, action)=> {
            state.name = action.payload;
        }

    }
});

export const {changeName} =catSlice.actions;
export default catSlice.reducer;