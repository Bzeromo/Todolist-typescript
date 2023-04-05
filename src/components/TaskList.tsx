import styled from "@emotion/styled"
import Task from "./Task"
import { useSelector } from "react-redux";
import { RootState } from "../redux";

const UnorderedList = styled.ul`
    width: 400px;
    margin: 16 0 0 0;
    padding: 0;

    & > li {
        &:not(:first-of-type) {
            margin-top: 8px;
        }
    }
`

const TaskList = (props: any) => {
    const tasks = useSelector((store: RootState) => store.tasks);

    return (
        <UnorderedList {...props}>
            {
                tasks.map(item => (
                   <Task
                    key={item.id}
                    id={item.id}
                    content={item.content}
                    complete={item.complete}
                   /> 
                ))
            }
        </UnorderedList>
    )
}

export default TaskList;