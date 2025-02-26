import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  editingItem: null,
  showInput: false,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ text: action.payload });
    },
    deleteItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    startEditing: (state, action) => {
      if (state.items[action.payload]) {
        state.editingItem = action.payload;
        state.showInput = true;
      }
    },
    updateItem: (state, action) => {
      const { index, text } = action.payload;
      if (index !== null && index >= 0 && index < state.items.length) {
        // Check if index exists before updating
        state.items[index].text = text;
        state.editingItem = null;
        state.showInput = false;
      }
    },
    showInputField: (state, action) => {
      state.showInput = action.payload;
    },
  },
});

export const { addItem, deleteItem, startEditing, updateItem, showInputField } =
  listSlice.actions;

export default listSlice.reducer;
