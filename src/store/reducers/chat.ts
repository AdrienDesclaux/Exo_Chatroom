import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Message = {
  id: string;
  author: string;
  content: string;
};

type User = {
  email: string;
  password: string;
};

type ChatState = {
  messages: Message[];
  inputValue: string;
  settingsMenuOpen: boolean;
  user: User | null;
};

const initialState: ChatState = {
  messages: [],
  inputValue: '',
  settingsMenuOpen: false,
  user: null,
};

// Pour gérer nos reducers, on va utiliser la fonction createSlice de redux-toolkit
// Elle permet de générér un reducer et des actions associées
const chatSlice = createSlice({
  // On va donnée un nom au slice
  // Cela permet de prefixer les actions générées par `${sliceName}/${actionName}`
  // ex: `color/changeFirstColor`
  name: 'chat',
  // On va définir l'état initial du reducer
  initialState,
  // On va définir toutes les actions générées par le slice
  // Et la traduction en reducer
  reducers: {
    // équivalent au switch case 'CHANGE_FIRST_COLOR'
    changeInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },

    loadNewMessage(state) {
      state.messages.push({
        id: crypto.randomUUID(),
        author: 'pas moi',
        content: state.inputValue,
      });
      state.inputValue = '';
    },

    openSettings(state) {
      state.settingsMenuOpen = !state.settingsMenuOpen;
    },

    logIn(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

// On récupère les actions générées par le slice depuis sa propriété `actions`
// Et on les exportes pour pouvoir les utiliser dans notre application

export const { changeInputValue, loadNewMessage, openSettings, logIn } =
  chatSlice.actions;

export default chatSlice.reducer;
