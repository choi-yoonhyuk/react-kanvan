import { atom } from "recoil";

const localData = localStorage.getItem("todos");

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  key: "todos",
  default: localData
    ? JSON.parse(localData)
    : {
        "To Do": [],
        Doing: [],
        Done: [],
      },
});
