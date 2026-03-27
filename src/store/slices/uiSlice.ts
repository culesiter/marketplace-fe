import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  alertBox: {
    isOpen: boolean;
  };
  chatBox: {
    isOpen: boolean;
    recipient?: string;
  };
}

const initialState: UiState = {
  alertBox: {
    isOpen: true,
  },
  chatBox: {
    isOpen: false,
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
    openChatBox: (state, action) => {
      state.chatBox.isOpen = true;
      state.chatBox.recipient = action.payload;
    },
    closeChatBox: (state) => {
      state.chatBox.isOpen = false;
    },
  },
});

export const { openAlertBox, closeAlertBox, toggleAlertBox, openChatBox, closeChatBox } = uiSlice.actions;

export default uiSlice.reducer;
