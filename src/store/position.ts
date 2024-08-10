//목적지 위도 경도 지정

import { createSlice } from "@reduxjs/toolkit";

interface positionState {
    start: {
        adress: string;
        x: number | null;
        y: number | null;
    };
    end: {
        adress: string;
        x: number | null;
        y: number | null;
    };
}

const initialState: positionState = {
    start: {
        adress: "",
        x: null,
        y: null,
    },
    end: {
        adress: "",
        x: null,
        y: null,
    },
};

export const positionSlice = createSlice({
    name: "position",
    initialState,
    reducers: {
        setStart: (state, action) => {
            state.start = action.payload;
        },
        setEnd: (state, action) => {
            state.end = action.payload;
        },
    },
});

export const positionActions = positionSlice.actions;
export default positionSlice.reducer;
