import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'slice',
    initialState: {
        tabCount: 1,
        tabs: ['S1'],
        currentTab: 'S1',
        commands: {}
    },

    reducers: {
        addTab: (state) => {
            state.tabs = [...state.tabs, `S${state.tabCount + 1}`];
            state.currentTab = `S${state.tabCount + 1}`;
            state.tabCount = state.tabCount + 1;
        },
        switchTab: (state, action) => {
            state.currentTab = action.payload;
        },
        addCmd: (state, action) => {

            const sprite = action.payload.sprite;
            const cmd = action.payload.cmd;

            if (!state.commands[sprite]) state.commands[sprite] = [];
            const newSpriteCmds = state.commands[sprite];
            newSpriteCmds.push(cmd);

            state.commands = { ...state.commands, [sprite]: [...newSpriteCmds] }
        }
    }
});

export const { addTab, switchTab, addCmd } = slice.actions;

export default slice.reducer;
