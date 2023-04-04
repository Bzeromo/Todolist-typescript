import { createContext, useContext, ReactChild } from "react"
import { v4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

interface Task {
    id: string;
    content: string;
    complete: boolean;
}

// 인터페이스 이름 앞 I는 I 뒤의 이름을 가진 객체의 인터페이스라는 뜻
interface ITaskContext {
    tasks: Task[];
    addTask(content: string): void;
    updateTask(id: string, status: boolean): void;
    removeTask(id: string): void;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);
export const useTasks = () => useContext(TaskContext);

interface Props {
    children: ReactChild;
    initialTasks?: Task[];
}

const TaskProvider = ({ children, initialTasks = [] }: Props) => {
    const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

    const addTask = (content: string) => {
        setTasks([
            ...tasks,
            {
                id: v4(),
                content,
                complete: false
            }
        ])
    }

    const updateTask = (id: string, status: boolean) => {
        setTasks(tasks.map(item => item.id === id ? {...item, complete: status} : item))
    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(item => item.id !== id))
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;