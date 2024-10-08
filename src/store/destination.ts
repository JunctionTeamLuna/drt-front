import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Destination {
    type: string;
    destination: [number, number];
}

interface DestinationState {
    destinations: Destination[];
}

const initialState: DestinationState = {
    destinations: [],
};

export const destinationSlice = createSlice({
    name: "destination",
    initialState,
    reducers: {
        setDestination(state, action: PayloadAction<Destination>) {
            state.destinations.push(action.payload);
        },
    },
});

export const destinationActions = destinationSlice.actions;
export default destinationSlice.reducer;
