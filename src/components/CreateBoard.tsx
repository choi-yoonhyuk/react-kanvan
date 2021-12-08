import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

const Wrapper = styled.div`
  margin-top: 100px;
  padding-left: 40%;
`;

const Form = styled.form`
  max-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  margin-left: 20px;
  margin-bottom: 300px;
  border-radius: 20px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);
  flex-grow: 1;
`;

const Input = styled.input`
  text-align: center;
`;

const Button = styled.button``;

interface IAddBoard {
  board: string;
}

function CreateBoard() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm();
  const onValid = ({ board }: IAddBoard) => {
    
    const newBoard = { [board]: [] };
    console.log(newBoard);
    setToDos((allboard) => {
      localStorage.setItem(
        "board",
        JSON.stringify({ ...allboard, ...newBoard })
      );

      return { ...allboard, ...newBoard };
    });
    setValue("board", "");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("board", {
            required: true,
          })}
          type="text"
          placeholder="Add"
          maxLength={15}
        />
        <Button>Add Board</Button>
      </Form>
    </Wrapper>
  );
}

export default CreateBoard;
