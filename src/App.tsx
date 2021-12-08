import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./components/Board";
import CreateBoard from "./components/CreateBoard";
import DragabbleCard from "./components/DragabbleCard";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(250px, 1fr);
  place-content: center center;
  gap: 10px;
  width: 100%;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // 같은 보드끼리 움직임.
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        console.log(boardCopy);
        const taskObj = boardCopy[source.index];
        console.log(taskObj);
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);

        // 로컬스토리지에 저장

        localStorage.setItem(
          "todos",
          JSON.stringify({
            ...allBoards,
            [source.droppableId]: boardCopy,
          })
        );

        // console.log(
        //   source.index,
        //   "번째 인덱스를 끌어온다",
        //   source.index,
        //   "번째 인덱스는 기존자리에서 제거됨"
        // );
        // console.log(
        //   "도착값인",
        //   destination.index,
        //   "번째 인덱스에",
        //   "끌고온",
        //   taskObj,
        //   "를 삽입"
        // );
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
          // "Doing" : [e,c,d]
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      // 다른 보드끼리 움직임.
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);

        //로컬스토리지에 저장

        localStorage.setItem(
          "todos",
          JSON.stringify({
            ...allBoards,
            [source.droppableId]: sourceBoard,
            [destination.droppableId]: destinationBoard,
          })
        );

        // console.log(
        //   source.index,
        //   "번째 인덱스를 끌고온다",
        //   source.index,
        //   "번째 인덱스는 기존자리에서 제거됨"
        // );
        // console.log(
        //   source.droppableId,
        //   "에 있는",
        //   taskObj,
        //   "를 끌고와서",
        //   destination.droppableId,
        //   "의",
        //   destination?.index,
        //   "번째 인덱스에 삽입."
        // );
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <CreateBoard />
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
