export type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export type State = {
  isPersonalDataVisible: boolean;
  optionSelected: number;
  availableStrings: string[];
  usedStrings: string[];
  allStrings: string[];
  isRandomOptionSelected: boolean;
};

export type Action =
  | { type: "INITIALIZE"; payload: string[] }
  | { type: "TOGGLE_PERSONAL_DATA_VISIBILITY" }
  | { type: "CHOOSE_OPTION"; payload: number }
  | { type: "REPLACE" }
  | { type: "ADD" }
  | { type: "RESET" };
