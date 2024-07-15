import React, { createContext, useEffect, useReducer } from "react";
import * as types from "./types";
import jsonData from "../../data.json";

const initialState: types.State = {
  isPersonalDataVisible: false,
  availableStrings: [],
  usedStrings: [],
  allStrings: [],
  optionSelected: 0,
  isRandomOptionSelected: false,
};

const GlobalContext = createContext<{
  state: types.State;
  dispatch: React.Dispatch<types.Action>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

const globalReducer = (
  state: types.State,
  action: types.Action
): types.State => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        availableStrings: action.payload,
        allStrings: action.payload,
      };
    case "TOGGLE_PERSONAL_DATA_VISIBILITY":
      return {
        ...state,
        isPersonalDataVisible: !state.isPersonalDataVisible,
      };
    case "CHOOSE_OPTION":
      const optionSelected = action.payload;

      return {
        ...state,
        optionSelected: optionSelected,
        isRandomOptionSelected: optionSelected === 3,
      };
    case "REPLACE":
        let replaceIndex = state.optionSelected - 1;

        if (state.isRandomOptionSelected) {
            replaceIndex = Math.floor(Math.random() * state.availableStrings.length);
            console.log(replaceIndex);
        }
      const replaceSelectedString =
        state.availableStrings[replaceIndex];

      if (!replaceSelectedString) return state;

      return {
        ...state,
        availableStrings: state.availableStrings.filter(
          (string) => string !== replaceSelectedString
        ),
        usedStrings: [replaceSelectedString],
      };
    case "ADD":
      let addIndex = state.optionSelected - 1;

      if (state.isRandomOptionSelected) {
        addIndex = Math.floor(Math.random() * state.availableStrings.length);
      }

      if (addIndex < 0 || addIndex >= state.availableStrings.length) {
        return state;
      }

      const addSelectedString = state.availableStrings[addIndex];

      const newAvailableStrings = [...state.usedStrings, addSelectedString];

      const sortedAvailableStrings = newAvailableStrings.sort((a, b) => {
        return a.localeCompare(b);
      });

      return {
        ...state,
        availableStrings: state.availableStrings.filter(
          (string) => string !== addSelectedString
        ),
        usedStrings: sortedAvailableStrings,
      };
    case "RESET":
      return {
        ...state,
        availableStrings: state.allStrings,
        usedStrings: [],
        isPersonalDataVisible: false,
      };
    default:
      return state;
  }
};

const GlobalContextProvider = (props: types.GlobalContextProviderProps) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    if (jsonData.strings.length > 0) {
      dispatch({ type: "INITIALIZE", payload: jsonData.strings });
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
