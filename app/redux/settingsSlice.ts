import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type SettingsStateType = {
    allowNotifications: boolean,
    allowLocation: boolean,
    allowBiometric: boolean,
    staySignedIn: boolean,
    swipeDemoSeen: boolean,
};

const initialState: SettingsStateType = {
    allowNotifications: false,
    allowLocation: false,
    allowBiometric: false,
    staySignedIn: false,
    swipeDemoSeen: false,
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        toggleNotifications: (state: SettingsStateType, action: PayloadAction<null>) => {
            state.allowNotifications = !state.allowNotifications
        },
        toggleLocation: (state: SettingsStateType, action: PayloadAction<null>) => {
            state.allowLocation = !state.allowLocation;
        },
        toggleBiometric: (state: SettingsStateType, action: PayloadAction<null>) => {
            state.allowBiometric = !state.allowBiometric;
        },
        toggleStaySignedIn: (state: SettingsStateType, action: PayloadAction<null>) => {
            state.staySignedIn = !state.staySignedIn;
        },
        setSwipeDemoSeen: (state: SettingsStateType, action: PayloadAction<null>) => {
            state.swipeDemoSeen = true;
        },
    },
});

export const { toggleNotifications, toggleLocation, toggleBiometric, toggleStaySignedIn, setSwipeDemoSeen } = settingsSlice.actions;
export default settingsSlice.reducer;
