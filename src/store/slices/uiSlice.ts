import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  alertBox: {
    isOpen: boolean;
  };
}

const initialState: UiState = {
  alertBox: {
    isOpen: true, // Default open as requested
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openAlertBox: (state) => {
      state.alertBox.isOpen = true;
    },
    closeAlertBox: (state) => {
      state.alertBox.isOpen = false;
    },
    toggleAlertBox: (state) => {
      state.alertBox.isOpen = !state.alertBox.isOpen;
    },
  },
});

export const { openAlertBox, closeAlertBox, toggleAlertBox } = uiSlice.actions;

export default uiSlice.reducer;
