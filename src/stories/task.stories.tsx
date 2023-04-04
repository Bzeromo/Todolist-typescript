import Task from "../components/Task";

export default {
    title: 'Component/Task',
    component: Task,
};

export const Default = () => {
    return <Task content="Todo" complete />;
};
