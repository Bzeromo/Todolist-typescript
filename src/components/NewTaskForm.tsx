import styled from "@emotion/styled";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { tasks } from "../redux/tasks";

const Form = styled.form`
    width: 400px;
`

const Input = styled.input`
    width: 332px;
    height: 32px;
    padding: 4px 6px;
    border-radius: 8px;
    border: 2px solid black;
    box-sizing: border-box;
`

const SubmitButton = styled.button`
    width: 60px;
    height: 32px;
    padding: 4px 6px;
    margin-left: 8px;
    color: white;
    border-radius: 8px;
    border: none;
    background-color: black;
    box-sizing: border-box;
    cursor: pointer;
`

const NewTaskForm = (props: any) => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(tasks.actions.add(task));
        setTask("");
    }

    return (
        <Form {...props} onSubmit={handleSubmit}>
            <Input type="text" value={task} onChange={(e) => setTask(e.target.value)} required />
            <SubmitButton>추가</SubmitButton>
        </Form>
    )
}

export default NewTaskForm;