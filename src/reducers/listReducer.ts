import { Item } from "../types/ReduceItem";

type AddAction = {
  type: "ADD";
  payload: { text: string };
};
type EditAction = {
  type: "EDIT";
  payload: { newText: string; id: number };
};
type ToggleAction = {
  type: "TOGGLE";
  payload: { id: number };
};
type RemoveAction = {
  type: "DELETE";
  payload: { id: number };
};

type ListActions = AddAction | EditAction | ToggleAction | RemoveAction;

export const listReducer = (list: Item[], action: ListActions) => {
  switch (action.type) {
    case "ADD":
      return [
        ...list,
        { id: list.length, text: action.payload.text, done: false },
      ];
    case "EDIT":
      return list.map((t) =>
        t.id === action.payload.id ? { ...t, text: action.payload.newText } : t
      );
    case "TOGGLE":
      return list.map((t) =>
        t.id === action.payload.id ? { ...t, done: !t.done } : t
      );
    case "DELETE":
      return list.filter((t) => t.id !== action.payload.id);
    default:
      return list;
  }
};
